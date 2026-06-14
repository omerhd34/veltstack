# Her degisen dosyayi ayri commit eder
Set-Location $PSScriptRoot\..

function Get-CommitMessage {
    param([string]$Status, [string]$Path)

    if ($Status -eq "D") { return "refactor: remove $Path" }

    $name = Split-Path $Path -Leaf
    $dir = Split-Path $Path -Parent

    switch -Wildcard ($Path) {
        ".gitignore" { return "chore: update .gitignore" }
        "AGENTS.md" { return "docs: update AGENTS.md" }
        "package.json" { return "chore: rename project to veltstack" }
        "package-lock.json" { return "chore: update package-lock.json" }
        "next.config.ts" { return "config: update Next.js configuration" }
        "middleware.ts" { return "feat: add i18n middleware" }
        "i18n.ts" { return "feat: add i18n configuration" }
        "components.json" { return "chore: add shadcn components config" }
        "prisma/schema.prisma" { return "feat: add Prisma database schema" }
        "prisma/seed.ts" { return "feat: add database seed script" }
        "app/globals.css" { return "style: update global styles" }
        "app/layout.tsx" { return "feat: update root layout with Veltstack metadata" }
        "app/manifest.ts" { return "feat: add web app manifest" }
        "app/opengraph-image.tsx" { return "feat: add Open Graph image generator" }
        "app/robots.ts" { return "feat: add robots.txt generator" }
        "app/sitemap.ts" { return "feat: add sitemap generator" }
        "app/[locale]/layout.tsx" { return "feat: add locale layout" }
        "app/[locale]/page.tsx" { return "feat: add localized home page" }
        "messages/*" { return "feat(i18n): add global messages - $name" }
        "i18n/*" { return "feat(i18n): add $name" }
        "lib/*" { return "feat: add lib/$name" }
        "hooks/*" { return "feat: add hook $name" }
        "store/*" { return "feat: add store/$name" }
        "types/*" { return "feat: add type definition $name" }
        "public/*" { return "assets: add $Path" }
        "app/api/*" { return "feat(api): add $Path" }
        "app/admin/*" { return "feat(admin): add $Path" }
        "app/[locale]/*" { return "feat(pages): add $Path" }
        "components/seo/*" { return "feat(seo): add $name" }
        "components/ui/*" { return "feat(ui): add $name" }
        "components/admin/*" { return "feat(admin): add $Path" }
        "components/layout/*" { return "feat(layout): add $Path" }
        "components/pages/*" { return "feat(pages): add $Path" }
        "components/sections/*" { return "feat(sections): add $Path" }
        "components/*" { return "feat: add component $Path" }
        default { return "feat: add $Path" }
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

Write-Host "`nDone! $total commits created."
