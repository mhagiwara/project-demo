/* empty css                                 */
import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from '../chunks/astro/server_TbW9dP_l.mjs';
import { $ as $$Image, a as $$CodeBlock, b as $$Header, h as $$Video, o as outside, c as $$HighlightedSection, d as $$SmallCaps, g as $$Figure, j as $$Image$1, f as $$TwoColumns, i as $$YouTubeVideo, R as Roman, e as $$LaTeX, k as $$Layout } from '../chunks/outside_BNb3tXPd.mjs';
import '@astrojs/internal-helpers/path';
import 'clsx';
export { renderers } from '../renderers.mjs';

const transformer = new Proxy({"src":"/_astro/transformer.DCw87isR.webp","width":1320,"height":1860,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mhagiwara/dev/project-demo/src/assets/transformer.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/mhagiwara/dev/project-demo/src/assets/transformer.webp");
							return target[name];
						}
					});

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../layouts/Layout.astro",
  "title": "Academic Project Page Template",
  "description": "Simple project page template for your research paper, built with Astro and Tailwind CSS",
  "favicon": "favicon.svg",
  "thumbnail": "screenshot.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "abstract",
    "text": "Abstract"
  }, {
    "depth": 2,
    "slug": "figures",
    "text": "Figures"
  }, {
    "depth": 2,
    "slug": "two-columns",
    "text": "Two columns"
  }, {
    "depth": 2,
    "slug": "heading-levels",
    "text": "Heading levels"
  }, {
    "depth": 3,
    "slug": "heading-3",
    "text": "Heading 3"
  }, {
    "depth": 4,
    "slug": "heading-4",
    "text": "Heading 4"
  }, {
    "depth": 2,
    "slug": "latex",
    "text": "LaTeX"
  }, {
    "depth": 2,
    "slug": "tables",
    "text": "Tables"
  }, {
    "depth": 2,
    "slug": "bibtex-citation",
    "text": "BibTeX citation"
  }];
}
const components = {
  pre: $$CodeBlock
};
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Header, {
      title: frontmatter.title,
      authors: [{
        name: "Roman Hauksson",
        url: "https://roman.technology",
        institution: "Independent",
        notes: ["*", "†"]
      }, {
        name: "Author Two",
        institution: "Institution Two",
        notes: ["*", "†"]
      }, {
        name: "Author Three",
        institution: "Institution Three",
        notes: ["†"]
      }, {
        name: "Author Four",
        institution: "Institution Four"
      }],
      conference: "Conference Name",
      notes: [{
        symbol: "*",
        text: "author note one"
      }, {
        symbol: "†",
        text: "author note two"
      }],
      links: [{
        name: "Paper",
        url: "",
        icon: "fa-solid:file-pdf"
      }, {
        name: "Code",
        url: "https://github.com/RomanHauksson/academic-project-astro-template",
        icon: "mdi:github"
      }, {
        name: "arXiv",
        url: "",
        icon: "academicons:arxiv"
      }]
    }), "\n", createVNode($$Video, {
      source: outside
    }), "\n", createVNode($$HighlightedSection, {
      children: [createVNode(_components.h2, {
        id: "abstract",
        children: "Abstract"
      }), createVNode(_components.p, {
        children: ["This is a live demo for a template you can use to create a simple project page for your research paper. See the code for the template and instructions on how to use it yourself ", createVNode(_components.a, {
          href: "https://github.com/RomanHauksson/academic-project-astro-template",
          children: "here"
        }), ". It’s made with the ", createVNode(_components.a, {
          href: "https://astro.build/",
          children: "Astro web framework"
        }), " and styled with ", createVNode(_components.a, {
          href: "https://tailwindcss.com/",
          children: "Tailwind CSS"
        }), ". You write the content in ", createVNode(_components.a, {
          href: "https://mdxjs.com/",
          children: "MDX"
        }), ", which enables markdown formatting like ", createVNode(_components.strong, {
          children: "bold"
        }), ", ", createVNode(_components.em, {
          children: "italics"
        }), ", and ", createVNode(_components.del, {
          children: "strikethrough"
        }), ", as well as custom components like ", createVNode($$SmallCaps, {
          children: "small caps."
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "figures",
      children: "Figures"
    }), "\n", createVNode(_components.p, {
      children: "Use the figure component to display images, videos, equations, or any other element, with an optional caption."
    }), "\n", createVNode($$Figure, {
      caption: "Diagram of the transformer deep learning architecture.",
      children: createVNode($$Image$1, {
        source: transformer,
        altText: "Diagram of the transformer deep learning architecture."
      })
    }), "\n", createVNode(_components.h2, {
      id: "two-columns",
      children: "Two columns"
    }), "\n", createVNode(_components.p, {
      children: ["Use the two columns component to display two columns of content. In this example, the first column contains a figure with a YouTube video and the second column contains a figure with a custom ", createVNode(_components.a, {
        href: "https://react.dev/",
        children: "React"
      }), " component. By default, they display side by side, but if the screen is narrow enough (for example, on mobile), they’re arranged vertically."]
    }), "\n", createVNode($$TwoColumns, {
      children: [createVNode($$Figure, {
        slot: "left",
        caption: "Take a look at this YouTube video.",
        children: createVNode($$YouTubeVideo, {
          videoId: "wjZofJX0v4M"
        })
      }), createVNode($$Figure, {
        slot: "right",
        caption: "Now look at this Gaussian Splat, rendered with a React component.",
        children: createVNode(Roman, {
          "client:idle": true,
          "client:component-path": "/Users/mhagiwara/dev/project-demo/src/components/Splat.tsx",
          "client:component-export": "default",
          "client:component-hydration": true
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "heading-levels",
      children: "Heading levels"
    }), "\n", createVNode(_components.p, {
      children: "Use headings to divide your content into sections."
    }), "\n", createVNode(_components.h3, {
      id: "heading-3",
      children: "Heading 3"
    }), "\n", createVNode(_components.p, {
      children: "Go down a level to heading 3…"
    }), "\n", createVNode(_components.h4, {
      id: "heading-4",
      children: "Heading 4"
    }), "\n", createVNode(_components.p, {
      children: "…and down again to heading 4."
    }), "\n", createVNode(_components.h2, {
      id: "latex",
      children: "LaTeX"
    }), "\n", createVNode(_components.p, {
      children: ["You can also add LaTeX formulas, rendered during the build process using ", createVNode(_components.a, {
        href: "https://katex.org/",
        children: "KaTeX"
      }), " so they’re quick to load for visitors of your project page. You can write them inline, like this: ", createVNode($$LaTeX, {
        inline: true,
        formula: "a^2 + b^2 = c^2"
      }), ". Or, you can write them as a block:"]
    }), "\n", createVNode($$LaTeX, {
      formula: "\\int_a^b f(x) dx"
    }), "\n", createVNode(_components.h2, {
      id: "tables",
      children: "Tables"
    }), "\n", createVNode(_components.p, {
      children: ["You can add simple tables using ", createVNode(_components.a, {
        href: "https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables",
        children: "GitHub Flavored Markdown syntax"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Model"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Accuracy"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "F1 score"
          }), createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Training time (hours)"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "BERT-base"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.89"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.87"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4.5"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "RoBERTa-large"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.92"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.91"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7.2"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "DistilBERT"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.86"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.84"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2.1"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "XLNet"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.90"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0.89"
          }), createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6.8"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "bibtex-citation",
      children: "BibTeX citation"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-light",
      style: {
        backgroundColor: "#fff",
        color: "#24292e",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bibtex",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49"
            },
            children: "@misc"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1"
            },
            children: "roman2024academic"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#005CC5"
            },
            children: "  author"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "{Roman Hauksson}"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#005CC5"
            },
            children: "  title"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "Academic Project Page Template"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#005CC5"
            },
            children: "  year"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "2024"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#005CC5"
            },
            children: "  howpublished"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: " = "
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "\\url{https://research-template.roman.technology}"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "";
const file = "/Users/mhagiwara/dev/project-demo/src/pages/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...components, ...props.components, "astro-image": components.img ??  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mhagiwara/dev/project-demo/src/pages/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	components,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
