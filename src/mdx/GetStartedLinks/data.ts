type GetStartedItems = {
  title: string;
  items: {
    name: string;
    path: {
      new: string;
      existing: string;
    };
    icon: {
      light: {
        path: string;
        style?: Record<string, any>;
      };
      dark: {
        path: string;
        style?: Record<string, any>;
      };
    };
  }[];
}[];

export const getStartedItems: GetStartedItems = [
  {
    title: "Duckdb",
    items: [
      {
        name: "Duckdb-neo",
        path: {
          existing: "/docs/duckdb/get-started/duckdb-existing",
          new: "/docs/duckdb/get-started/duckdb-new",
        },
        icon: {
          light: {
            path: "/public/svg/duckdb.svg",
            style: {
              width: 22,
              height: 22,
            },
          },
          dark: {
            path: "/public/svg/duckdb-dark.svg",
            style: {
              width: 22,
              height: 22,
            },
          },
        },
      },
    ],
  },
  {
    title: "PostgreSQL",
    items: [
      {
        name: "PostgreSQL",
        path: {
          existing: "/docs/get-started/postgresql-existing",
          new: "/docs/get-started/postgresql-new",
        },
        icon: {
          light: {
            path: "/public/svg/postgresql.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/postgresql.svg",
            style: {
              width: 20,
              fill: "#f0f0f0",
            },
          },
        },
      },

      {
        name: "Neon",
        path: {
          existing: "/docs/get-started/neon-existing",
          new: "/docs/get-started/neon-new",
        },
        icon: {
          light: {
            path: "/public/svg/neon-light.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/neon-dark.svg",
            style: {
              width: 20,
            },
          },
        },
      },
      {
        name: "Vercel Postgres",
        path: {
          existing: "/docs/get-started/vercel-existing",
          new: "/docs/get-started/vercel-new",
        },
        icon: {
          light: {
            path: "/public/svg/vercel.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/vercel.svg",
            style: {
              width: 20,
              fill: "#000000",
            },
          },
        },
      },
      {
        name: "Supabase",
        path: {
          existing: "/docs/get-started/supabase-existing",
          new: "/docs/get-started/supabase-new",
        },
        icon: {
          light: {
            path: "/public/svg/supabase.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/supabase.svg",
            style: {
              width: 20,
            },
          },
        },
      },
      {
        name: "Xata",
        path: {
          existing: "/docs/get-started/xata-existing",
          new: "/docs/get-started/xata-new",
        },
        icon: {
          light: {
            path: "/public/svg/xata.svg",
            style: {
              width: 26,
            },
          },
          dark: {
            path: "/public/svg/xata.svg",
            style: {
              width: 26,
            },
          },
        },
      },
      {
        name: "PGLite",
        path: {
          existing: "/docs/get-started/pglite-existing",
          new: "/docs/get-started/pglite-new",
        },
        icon: {
          light: {
            path: "/public/svg/pglite.svg",
            style: {
              width: 26,
            },
          },
          dark: {
            path: "/public/svg/pglite.svg",
            style: {
              width: 26,
            },
          },
        },
      },
      {
        name: "Nile",
        path: {
          existing: "/docs/get-started/nile-existing",
          new: "/docs/get-started/nile-new",
        },
        icon: {
          light: {
            path: "/public/svg/nile.svg",
          },
          dark: {
            path: "/public/svg/nile.svg",
          },
        },
      },
      {
        name: "Bun SQL",
        path: {
          existing: "/docs/get-started/bun-sql-existing",
          new: "/docs/get-started/bun-sql-new",
        },
        icon: {
          light: {
            path: "/public/svg/bun.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/bun.svg",
            style: {
              width: 20,
            },
          },
        },
      },
    ],
  },
  {
    title: "CockroachDB",
    items: [
      {
        name: "CockroachDB",
        path: {
          existing: "/docs/cockroach/get-started/cockroach-existing",
          new: "/docs/cockroach/get-started/cockroach-new",
        },
        icon: {
          light: {
            path: "/public/svg/cockroach.svg",
            style: {
              width: 22,
              height: 22,
            },
          },
          dark: {
            path: "/public/svg/cockroach.svg",
            style: {
              width: 22,
              height: 22,
              fill: "#f0f0f0",
            },
          },
        },
      },
    ],
  },
    {
    title: "ClickHouse",
    items: [
      {
        name: "ClickHouse",
        path: {
          existing: "/docs/clickhouse/get-started/clickhouse-existing",
          new: "/docs/clickhouse/get-started/clickhouse-new",
        },
        icon: {
          light: {
            path: "/public/svg/clickhouse-light.svg",
            style: {
              width: 22,
              height: 22,
            },
          },
          dark: {
            path: "/public/svg/clickhouse-dark.svg",
            style: {
              width: 22,
              height: 22,
            },
          },
        },
      },
    ],
  },
  {
    title: "Gel",
    items: [
      {
        name: "Gel",
        path: {
          existing: "/docs/gel/get-started/gel-existing",
          new: "/docs/gel/get-started/gel-new",
        },
        icon: {
          light: {
            path: "/public/svg/gel_light.svg",
            style: {
              style: "border-radius: 5px",
              width: 34,
              height: 34,
            },
          },
          dark: {
            path: "/public/svg/gel_dark.svg",
            style: {
              style: "border-radius: 5px",
              width: 34,
              height: 34,
            },
          },
        },
      },
    ],
  },
  {
    title: "MySQL",
    items: [
      {
        name: "MySQL",
        path: {
          existing: "/docs/mysql/get-started/mysql-existing",
          new: "/docs/mysql/get-started/mysql-new",
        },
        icon: {
          light: {
            path: "/public/svg/mysql.svg",
            style: {
              width: 20,
              fill: "#00546B",
            },
          },
          dark: {
            path: "/public/svg/mysql.svg",
            style: {
              width: 20,
              fill: "#F0F0F0",
            },
          },
        },
      },
      {
        name: "PlanetScale",
        path: {
          existing: "/docs/mysql/get-started/planetscale-existing",
          new: "/docs/mysql/get-started/planetscale-new",
        },
        icon: {
          light: {
            path: "/public/svg/planetscale.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/planetscale.svg",
            style: {
              width: 20,
              color: "#f0f0f0",
            },
          },
        },
      },
      {
        name: "TiDB",
        path: {
          existing: "/docs/mysql/get-started/tidb-existing",
          new: "/docs/mysql/get-started/tidb-new",
        },
        icon: {
          light: {
            path: "/public/svg/tidb.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/tidb.svg",
            style: {
              width: 20,
            },
          },
        },
      },
      {
        name: "SingleStore",
        path: {
          existing: "/docs/mysql/get-started/singlestore-existing",
          new: "/docs/mysql/get-started/singlestore-new",
        },
        icon: {
          light: {
            path: "/public/svg/singlestore_light.svg",
            style: {
              width: 20,
              fill: "#00546B",
            },
          },
          dark: {
            path: "/public/svg/singlestore_dark.svg",
            style: {
              width: 20,
              fill: "#F0F0F0",
            },
          },
        },
      },
    ],
  },
   {
    title: "MsSQL",
    items: [
      {
        name: "MsSQL",
        path: {
          existing: "/docs/mssql/get-started/mssql-existing",
          new: "/docs/mssql/get-started/mssql-new",
        },
        icon: {
          light: {
            path: "/public/svg/mssql.svg",
            style: {
              style: "border-radius: 5px",
              width: 34,
              height: 34,
            },
          },
          dark: {
            path: "/public/svg/mssql.svg",
            style: {
              style: "border-radius: 5px",
              width: 34,
              height: 34,
            },
          },
        },
      },
    ],
  },
  {
    title: "SQLite",
    items: [
      {
        name: "SQLite",
        path: {
          existing: "/docs/sqlite/get-started/sqlite-existing",
          new: "/docs/sqlite/get-started/sqlite-new",
        },
        icon: {
          light: {
            path: "/public/svg/sqlite.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/sqlite.svg",
            style: {
              width: 20,
            },
          },
        },
      },
      {
        name: "Turso",
        path: {
          existing: "/docs/sqlite/get-started/turso-existing",
          new: "/docs/sqlite/get-started/turso-new",
        },
        icon: {
          light: {
            path: "/public/svg/new-turso.svg",
            style: {
              width: 26,
            },
          },
          dark: {
            path: "/public/svg/new-turso-light.svg",
            style: {
              width: 26,
            },
          },
        },
      },
      {
        name: "Cloudflare D1",
        path: {
          existing: "/docs/sqlite/get-started/d1-existing",
          new: "/docs/sqlite/get-started/d1-new",
        },
        icon: {
          light: {
            path: "/public/svg/cloudflare.svg",
            style: {
              width: 26,
            },
          },
          dark: {
            path: "/public/svg/cloudflare.svg",
            style: {
              width: 26,
            },
          },
        },
      },
      {
        name: "Bun SQLite",
        path: {
          existing: "/docs/sqlite/get-started/bun-sqlite-existing",
          new: "/docs/sqlite/get-started/bun-sqlite-new",
        },
        icon: {
          light: {
            path: "/public/svg/bun.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/bun.svg",
            style: {
              width: 20,
            },
          },
        },
      },
      {
        name: "Cloudflare Durable Objects",
        path: {
          existing: "/docs/sqlite/get-started/do-existing",
          new: "/docs/sqlite/get-started/do-new",
        },
        icon: {
          light: {
            path: "/public/svg/cloudflare.svg",
            style: {
              width: 26,
            },
          },
          dark: {
            path: "/public/svg/cloudflare.svg",
            style: {
              width: 26,
            },
          },
        },
      },
    ],
  },
  {
    title: "Native SQLite",
    items: [
      {
        name: "Expo SQLite",
        path: {
          existing: "/docs/sqlite/get-started/expo-existing",
          new: "/docs/sqlite/get-started/expo-new",
        },
        icon: {
          light: {
            path: "/public/svg/expo.svg",
            style: {
              width: 20,
            },
          },
          dark: {
            path: "/public/svg/expo.svg",
            style: {
              width: 20,
            },
          },
        },
      },
      {
        name: "OP SQLite",
        path: {
          existing: "/docs/sqlite/get-started/op-sqlite-existing",
          new: "/docs/sqlite/get-started/op-sqlite-new",
        },
        icon: {
          light: {
            path: "/public/svg/opsqlite.png",
            style: {
              width: "20px",
              borderRadius: "4px",
            },
          },
          dark: {
            path: "/public/svg/opsqlite.png",
            style: {
              width: "20px",
              borderRadius: "4px",
            },
          },
        },
      },
    ],
  },
];
