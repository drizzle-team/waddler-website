type DbSwitcherItem = {
  id: string | null;
  name: string;
  path: string;
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
};

export const dbSwitcherItems: DbSwitcherItem[] = [
  {
    id: "duckdb",
    name: "Duckdb",
    path: "/docs/duckdb/overview",
    icon: {
      light: {
        path: "/public/svg/duckdb.svg",
        style: {
          width: 18,
          height: 18,
        },
      },
      dark: {
        path: "/public/svg/duckdb-dark.svg",
        style: {
          width: 18,
          height: 18,
        },
      },
    },
  },
  {
    id: "pg",
    name: "PostgreSQL",
    path: "/docs/overview",
    icon: {
      light: {
        path: "/public/svg/postgresql.svg",
        style: {
          width: 18,
        },
      },
      dark: {
        path: "/public/svg/postgresql.svg",
        style: {
          width: 18,
          fill: "#f0f0f0",
        },
      },
    },
  },
   {
    id: "cockroach",
    name: "CockroachDB",
    path: "/docs/cockroach/overview",
    icon: {
      light: {
        path: "/public/svg/cockroach.svg",
        style: {
          width: 18,
        },
      },
      dark: {
        path: "/public/svg/cockroach.svg",
        style: {
          width: 18,
          fill: "#f0f0f0",
        },
      },
    },
  },
  {
    id: "clickhouse",
    name: "ClickHouse",
    path: "/docs/clickhouse/overview",
    icon: {
      light: {
        path: "/public/svg/clickhouse-light.svg",
        style: {
          width: 18,
        },
      },
      dark: {
        path: "/public/svg/clickhouse-dark.svg",
        style: {
          width: 18,
          fill: "#f0f0f0",
        },
      },
    },
  },
  {
    id: "gel",
    name: "Gel",
    path: "/docs/gel/overview",
    icon: {
      light: {
        path: "/public/svg/gel_light.svg",
        style: {
          style: "border-radius: 5px",
          width: 32,
          height: 32,
        },
      },
      dark: {
        path: "/public/svg/gel_dark.svg",
        style: {
          style: "border-radius: 5px",
          width: 32,
          height: 32,
        },
      },
    },
  },
  {
    id: "mysql",
    name: "MySQL",
    path: "/docs/mysql/overview",
    icon: {
      light: {
        path: "/public/svg/mysql.svg",
        style: {
          width: 18,
          fill: "#00546B",
        },
      },
      dark: {
        path: "/public/svg/mysql.svg",
        style: {
          width: 18,
          fill: "#F0F0F0",
        },
      },
    },
  },
  {
    id: "sqlite",
    name: "SQLite",
    path: "/docs/sqlite/overview",
    icon: {
      light: {
        path: "/public/svg/sqlite.svg",
        style: {
          width: 18,
        },
      },
      dark: {
        path: "/public/svg/sqlite.svg",
        style: {
          width: 18,
        },
      },
    },
  },
];
