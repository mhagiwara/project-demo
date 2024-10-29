/* empty css                                 */
import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from '../chunks/astro/server_TbW9dP_l.mjs';
import { $ as $$Image, a as $$CodeBlock, b as $$Header, c as $$HighlightedSection, d as $$SmallCaps, e as $$LaTeX, f as $$TwoColumns, g as $$Figure, R as Roman, h as $$Video, o as outside, i as $$YouTubeVideo, j as $$Image$1, k as $$Layout } from '../chunks/outside_BNb3tXPd.mjs';
import '@astrojs/internal-helpers/path';
import 'clsx';
export { renderers } from '../renderers.mjs';

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
  "title": "Component Stress Test Page",
  "description": "A comprehensive test page that exercises all components in various combinations",
  "favicon": "/favicon-test.svg",
  "thumbnail": "/stress-test-thumb.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "abstract-with-complex-formatting",
    "text": "Abstract with Complex Formatting"
  }, {
    "depth": 2,
    "slug": "nested-components-and-mixed-content",
    "text": "Nested Components and Mixed Content"
  }, {
    "depth": 3,
    "slug": "mathematical-expression",
    "text": "Mathematical Expression"
  }, {
    "depth": 2,
    "slug": "lists",
    "text": "Lists"
  }, {
    "depth": 3,
    "slug": "unordered-lists",
    "text": "Unordered Lists"
  }, {
    "depth": 3,
    "slug": "ordered-lists",
    "text": "Ordered Lists"
  }, {
    "depth": 2,
    "slug": "video-integration-tests",
    "text": "Video Integration Tests"
  }, {
    "depth": 2,
    "slug": "complex-mathematical-expressions",
    "text": "Complex Mathematical Expressions"
  }, {
    "depth": 2,
    "slug": "nested-columns-with-mixed-content",
    "text": "Nested Columns with Mixed Content"
  }, {
    "depth": 3,
    "slug": "left-column-content",
    "text": "Left Column Content"
  }, {
    "depth": 2,
    "slug": "code-block-integration",
    "text": "Code Block Integration"
  }, {
    "depth": 3,
    "slug": "results-table-with-latex",
    "text": "Results Table with LaTeX"
  }, {
    "depth": 2,
    "slug": "bibtex-citation",
    "text": "BibTeX Citation"
  }];
}
const components = {
  pre: $$CodeBlock
};
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$Header, {
      title: frontmatter.title,
      authors: [{
        name: "Test Author One",
        url: "https://example.com",
        institution: "University of Testing",
        notes: ["*", "‡", "§"]
      }, {
        name: "Test Author Two",
        institution: "Institute of Verification",
        notes: ["†", "‡"]
      }, {
        name: "Test Author Three",
        url: "https://example.org",
        institution: "Validation College",
        notes: ["§"]
      }, {
        name: "Test Author Four",
        institution: "Quality Assurance University",
        notes: ["*", "†"]
      }],
      conference: "International Conference on Component Testing 2024",
      notes: [{
        symbol: "*",
        text: "Equal contribution"
      }, {
        symbol: "†",
        text: "Work done while at Previous Institution"
      }, {
        symbol: "‡",
        text: "Corresponding author"
      }, {
        symbol: "§",
        text: "Project lead"
      }],
      links: [{
        name: "Paper",
        url: "https://example.com/paper.pdf",
        icon: "fa-solid:file-pdf"
      }, {
        name: "Code",
        url: "https://github.com/example/repo",
        icon: "mdi:github"
      }, {
        name: "arXiv",
        url: "https://arxiv.org/abs/1234.5678",
        icon: "academicons:arxiv"
      }, {
        name: "Demo",
        url: "https://example.com/demo",
        icon: "fa-solid:play"
      }, {
        name: "Blog",
        url: "https://example.com/blog",
        icon: "fa-solid:blog"
      }]
    }), "\n", createVNode($$HighlightedSection, {
      children: [createVNode(_components.h2, {
        id: "abstract-with-complex-formatting",
        children: "Abstract with Complex Formatting"
      }), createVNode(_components.p, {
        children: ["This stress test demonstrates the integration of multiple components with varying levels of complexity. It includes ", createVNode(_components.strong, {
          children: "bold text"
        }), ", ", createVNode(_components.em, {
          children: "italic text"
        }), ", and ", createVNode($$SmallCaps, {
          children: "small caps text"
        }), " within the same paragraph. We can even combine them like ", createVNode(_components.strong, {
          children: createVNode(_components.em, {
            children: "bold italic text"
          })
        }), " and test how they interact with ", createVNode($$LaTeX, {
          inline: true,
          formula: "f(x) = \\sum_{i=0}^n \\frac{x^i}{i!}"
        }), " inline equations."]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "nested-components-and-mixed-content",
      children: "Nested Components and Mixed Content"
    }), "\n", createVNode($$TwoColumns, {
      children: [createVNode($$Figure, {
        slot: "left",
        caption: "A figure with nested LaTeX and small caps",
        children: createVNode($$HighlightedSection, {
          children: [createVNode(_components.h3, {
            id: "mathematical-expression",
            children: "Mathematical Expression"
          }), createVNode(_components.p, {
            children: ["The following equation describes ", createVNode($$SmallCaps, {
              children: "Complex System Dynamics"
            }), ":"]
          }), createVNode($$LaTeX, {
            formula: "\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u + f(x,t)"
          })]
        })
      }), createVNode($$Figure, {
        slot: "right",
        caption: "Multi-component visualization",
        children: createVNode(Roman, {
          "client:idle": true,
          "client:component-path": "/Users/mhagiwara/dev/project-demo/src/components/Splat.tsx",
          "client:component-export": "default",
          "client:component-hydration": true
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "lists",
      children: "Lists"
    }), "\n", createVNode(_components.h3, {
      id: "unordered-lists",
      children: "Unordered Lists"
    }), "\n", createVNode(_components.p, {
      children: "Paragraph."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["First item\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Subitem"
          }), "\n", createVNode(_components.li, {
            children: "Subitem"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Second item\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Subitem"
          }), "\n", createVNode(_components.li, {
            children: ["Subitem\n", createVNode(_components.ul, {
              children: ["\n", createVNode(_components.li, {
                children: ["Subsubitem\n", createVNode(_components.ul, {
                  children: ["\n", createVNode(_components.li, {
                    children: ["Subsubsubitem\n", createVNode(_components.ul, {
                      children: ["\n", createVNode(_components.li, {
                        children: "Subsubsubsubitem"
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Third item"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "ordered-lists",
      children: "Ordered Lists"
    }), "\n", createVNode(_components.p, {
      children: "Paragraph."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["First item\n", createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: "Subitem"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["Second item\n", createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: ["Subitem\n", createVNode(_components.ol, {
              children: ["\n", createVNode(_components.li, {
                children: "Subsubitem"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Third item"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "video-integration-tests",
      children: "Video Integration Tests"
    }), "\n", createVNode($$TwoColumns, {
      children: [createVNode($$Figure, {
        slot: "left",
        caption: "External video source",
        children: createVNode($$Video, {
          source: outside
        })
      }), createVNode($$Figure, {
        slot: "right",
        caption: "YouTube embedding test",
        children: createVNode($$YouTubeVideo, {
          videoId: "dQw4w9WgXcQ"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "complex-mathematical-expressions",
      children: "Complex Mathematical Expressions"
    }), "\n", createVNode($$HighlightedSection, {
      children: [createVNode(_components.p, {
        children: "Let’s test multiple LaTeX components in sequence:"
      }), createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: "Einstein Field Equations:"
        }), "\n"]
      }), createVNode($$LaTeX, {
        formula: "R_{\\mu\\nu} - \\frac{1}{2}Rg_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu}"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "nested-columns-with-mixed-content",
      children: "Nested Columns with Mixed Content"
    }), "\n", createVNode($$LaTeX, {
      formula: "R_{\\mu\\nu} - \\frac{1}{2}Rg_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\frac{8\\pi G}{c^4}T_{\\mu\\nu}"
    }), "\n", createVNode($$TwoColumns, {
      children: [createVNode("div", {
        slot: "left",
        children: createVNode($$HighlightedSection, {
          children: [createVNode(_components.h3, {
            id: "left-column-content",
            children: "Left Column Content"
          }), createVNode(_components.p, {
            children: ["Testing nested content with ", createVNode($$SmallCaps, {
              children: "formatting"
            }), " and equations:"]
          }), createVNode($$LaTeX, {
            inline: true,
            formula: "E = mc^2"
          }), createVNode($$Figure, {
            caption: "Nested figure in highlighted section",
            children: createVNode($$Image$1, {
              source: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flearnopencv.com%2Funderstanding-convolutional-neural-networks-cnn%2F&psig=AOvVaw2t2Oqbp7U66729PZxyRjqC&ust=1729640584963000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjsrbfToIkDFQAAAAAdAAAAABAE",
              altText: "Test image in nested structure",
              width: 300,
              height: 300
            })
          })]
        })
      }), createVNode($$TwoColumns, {
        slot: "right",
        children: [createVNode($$Figure, {
          slot: "left",
          caption: "Sub-column 1",
          children: createVNode($$Image$1, {
            source: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flearnopencv.com%2Funderstanding-convolutional-neural-networks-cnn%2F&psig=AOvVaw2t2Oqbp7U66729PZxyRjqC&ust=1729640584963000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjsrbfToIkDFQAAAAAdAAAAABAE",
            altText: "Test image in nested column",
            width: 300,
            height: 300
          })
        }), createVNode($$Figure, {
          slot: "right",
          caption: "Sub-column 2",
          children: createVNode($$LaTeX, {
            formula: "\\oint_{\\partial \\Sigma} \\omega = \\int_{\\Sigma} d\\omega"
          })
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "code-block-integration",
      children: "Code Block Integration"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-light",
      style: {
        backgroundColor: "#fff",
        color: "#24292e",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1"
            },
            children: " test_function"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "(x: "
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: ", y: "
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: ") -> "
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: ":"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "    \"\"\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "    Test function with LaTeX comments:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "    Computes: f(x,y) = x^2 + y^2"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "    \"\"\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#D73A49"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: " x"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: " y"
          }), createVNode(_components.span, {
            style: {
              color: "#D73A49"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              color: "#005CC5"
            },
            children: "2"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Method"
          }), createVNode(_components.th, {
            children: ["Accuracy (", createVNode($$LaTeX, {
              inline: true,
              formula: "\\alpha"
            }), ")"]
          }), createVNode(_components.th, {
            children: ["Speed (", createVNode($$LaTeX, {
              inline: true,
              formula: "\\beta"
            }), ")"]
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "A"
          }), createVNode(_components.td, {
            children: createVNode($$LaTeX, {
              inline: true,
              formula: "0.956 \\pm 0.012"
            })
          }), createVNode(_components.td, {
            children: createVNode($$LaTeX, {
              inline: true,
              formula: "1.23 \\times 10^{-3}"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "B"
          }), createVNode(_components.td, {
            children: createVNode($$LaTeX, {
              inline: true,
              formula: "0.978 \\pm 0.008"
            })
          }), createVNode(_components.td, {
            children: createVNode($$LaTeX, {
              inline: true,
              formula: "2.45 \\times 10^{-3}"
            })
          })]
        })]
      })]
    }), "\n", createVNode($$HighlightedSection, {
      children: [createVNode(_components.h3, {
        id: "results-table-with-latex",
        children: "Results Table with LaTeX"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
        children: [createVNode(_components.thead, {
          children: createVNode(_components.tr, {
            children: [createVNode(_components.th, {
              children: "Method"
            }), createVNode(_components.th, {
              children: ["Accuracy (", createVNode($$LaTeX, {
                inline: true,
                formula: "\\alpha"
              }), ")"]
            }), createVNode(_components.th, {
              children: ["Speed (", createVNode($$LaTeX, {
                inline: true,
                formula: "\\beta"
              }), ")"]
            })]
          })
        }), createVNode(_components.tbody, {
          children: [createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "A"
            }), createVNode(_components.td, {
              children: createVNode($$LaTeX, {
                inline: true,
                formula: "0.956 \\pm 0.012"
              })
            }), createVNode(_components.td, {
              children: createVNode($$LaTeX, {
                inline: true,
                formula: "1.23 \\times 10^{-3}"
              })
            })]
          }), createVNode(_components.tr, {
            children: [createVNode(_components.td, {
              children: "B"
            }), createVNode(_components.td, {
              children: createVNode($$LaTeX, {
                inline: true,
                formula: "0.978 \\pm 0.008"
              })
            }), createVNode(_components.td, {
              children: createVNode($$LaTeX, {
                inline: true,
                formula: "2.45 \\times 10^{-3}"
              })
            })]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "bibtex-citation",
      children: "BibTeX Citation"
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
            children: "@inproceedings"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#6F42C1"
            },
            children: "stress2024test"
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
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "Comprehensive Component Testing in Academic Project Templates"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "}"
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
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "Author, Test and Two, Author and Three, Author and Four, Author"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "}"
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
            children: "  booktitle"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "Proceedings of the International Conference on Component Testing"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "}"
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
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "2024"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "}"
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
            children: "  organization"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "{"
          }), createVNode(_components.span, {
            style: {
              color: "#24292E"
            },
            children: "ICCT"
          }), createVNode(_components.span, {
            style: {
              color: "#032F62"
            },
            children: "}"
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

const url = "/stress-test";
const file = "/Users/mhagiwara/dev/project-demo/src/pages/stress-test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...components, ...props.components, "astro-image": components.img ??  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/mhagiwara/dev/project-demo/src/pages/stress-test.mdx";
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
