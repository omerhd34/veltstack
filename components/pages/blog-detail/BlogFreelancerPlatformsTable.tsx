"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getFreelancerPlatformsContent } from "./freelancer-platforms-data";

const BATCH_SIZE = 5;

interface BlogFreelancerPlatformsTableProps {
  locale: "tr" | "en";
}

export function BlogFreelancerPlatformsTable({
  locale,
}: BlogFreelancerPlatformsTableProps) {
  const { headers, rows, moreLabel } = getFreelancerPlatformsContent(locale);
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const visibleRows = rows.slice(0, visibleCount);
  const remaining = rows.length - visibleCount;
  const nextBatch = Math.min(BATCH_SIZE, remaining);

  return (
    <div className="blog-table-expandable">
      <div
        className={cn(
          "blog-table-wrap",
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
                key={row.id}
                className={
                  index === visibleRows.length - 1 && remaining > 0
                    ? "blog-table-row-last-visible"
                    : undefined
                }
              >
                <td>
                  <a
                    href={row.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>{row.name}</strong>
                  </a>
                </td>
                <td>{row.model}</td>
                <td>{row.scenario}</td>
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
