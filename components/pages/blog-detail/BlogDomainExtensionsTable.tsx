"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getDomainExtensionsContent } from "./domain-extensions-data";

const BATCH_SIZE = 5;

interface BlogDomainExtensionsTableProps {
  locale: "tr" | "en";
}

export function BlogDomainExtensionsTable({
  locale,
}: BlogDomainExtensionsTableProps) {
  const { headers, rows, moreLabel } = getDomainExtensionsContent(locale);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const visibleRows = rows.slice(0, visibleCount);
  const remaining = rows.length - visibleCount;
  const nextBatch = Math.min(BATCH_SIZE, remaining);

  return (
    <div className="blog-table-expandable">
      <div
        className={cn(
          "blog-table-wrap blog-table-data",
          remaining > 0 && "blog-table-wrap--expandable",
        )}
      >
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row, index) => (
              <tr
                key={row.extension}
                className={
                  index === visibleRows.length - 1 && remaining > 0
                    ? "blog-table-row-last-visible"
                    : undefined
                }
              >
                <td>
                  <strong>{row.extension}</strong>
                </td>
                <td>{row.audience}</td>
                <td>{row.advantage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {remaining > 0 && (
        <button
          type="button"
          className="blog-table-expand-btn"
          onClick={() =>
            setVisibleCount((count) =>
              Math.min(count + BATCH_SIZE, rows.length),
            )
          }
        >
          {moreLabel.replace("{count}", String(nextBatch))}
        </button>
      )}
    </div>
  );
}
