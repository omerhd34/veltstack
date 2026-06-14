# Her değişen dosyayı ayrı commit eder (Türkçe mesajlar)
Set-Location $PSScriptRoot\..

function Get-CommitMessage {
    param([string]$Status, [string]$Path)

    if ($Status -eq "D") { return "$Path kaldırıldı" }

    $name = Split-Path $Path -Leaf

    switch -Wildcard ($Path) {
        ".gitignore" { return ".gitignore güncellendi" }
        "AGENTS.md" { return "AGENTS.md güncellendi" }
        "package.json" { return "Proje adı veltstack olarak değiştirildi" }
        "package-lock.json" { return "package-lock.json güncellendi" }
        "next.config.ts" { return "Next.js yapılandırması güncellendi" }
        "middleware.ts" { return "i18n middleware eklendi" }
        "i18n.ts" { return "i18n yapılandırması eklendi" }
        "components.json" { return "Shadcn bileşen yapılandırması eklendi" }
        "prisma/schema.prisma" { return "Prisma veritabanı şeması eklendi" }
        "prisma/seed.ts" { return "Veritabanı seed scripti eklendi" }
        "app/globals.css" { return "Global stiller güncellendi" }
        "app/layout.tsx" { return "Kök layout Veltstack meta verileriyle güncellendi" }
        "app/manifest.ts" { return "Web app manifest eklendi" }
        "app/opengraph-image.tsx" { return "Open Graph görsel oluşturucu eklendi" }
        "app/robots.ts" { return "robots.txt oluşturucu eklendi" }
        "app/sitemap.ts" { return "Sitemap oluşturucu eklendi" }
        "app/[locale]/layout.tsx" { return "app/[locale]/layout.tsx eklendi" }
        "app/[locale]/page.tsx" { return "app/[locale]/page.tsx eklendi" }
        "messages/*" { return "Global mesajlar $name eklendi" }
        "i18n/*" { return "$name eklendi" }
        "lib/*" { return "lib/$name eklendi" }
        "hooks/*" { return "$name hook eklendi" }
        "store/*" { return "store/$name eklendi" }
        "types/*" { return "$name tip tanımı eklendi" }
        "public/*" { return "$Path eklendi" }
        "app/api/*" { return "$Path eklendi" }
        "app/admin/*" { return "$Path eklendi" }
        "app/[locale]/*" { return "$Path eklendi" }
        "components/seo/*" { return "$name eklendi" }
        "components/ui/*" { return "$name eklendi" }
        "components/admin/*" { return "$Path eklendi" }
        "components/layout/*" { return "$Path eklendi" }
        "components/pages/*" { return "$Path eklendi" }
        "components/sections/*" { return "$Path eklendi" }
        "components/*" { return "$Path eklendi" }
        "scripts/*" { return "$Path eklendi" }
        default { return "$Path eklendi" }
    }
}

$files = git status --porcelain -uall | ForEach-Object {
    $line = $_.TrimEnd()
    $statusCode = $line.Substring(0, 2).Trim()
    $path = $line.Substring(3)
    [PSCustomObject]@{ Status = $statusCode; Path = $path }
}

$total = $files.Count
$i = 0

foreach ($item in $files) {
    $i++
    $filePath = $item.Path
    $msg = Get-CommitMessage -Status $item.Status -Path $filePath
    Write-Host "[$i/$total] $msg"

    if ($item.Status -eq "D") {
        git rm -- "$filePath" 2>$null
        if ($LASTEXITCODE -ne 0) { git add -- "$filePath" }
    } else {
        git add -- "$filePath"
    }

    git commit -m $msg
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Commit failed for $filePath"
        exit 1
    }
}

Write-Host "`nTamamlandı! $total commit oluşturuldu."
