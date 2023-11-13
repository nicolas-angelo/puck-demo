import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
};

export const config: Config<Props> = {
  categories: {
    common: {
      title: "Common",
      visible: true,
      defaultExpanded: true,
      components: ["HeadingBlock"],
    },
  },
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
  },
};

export default config;
