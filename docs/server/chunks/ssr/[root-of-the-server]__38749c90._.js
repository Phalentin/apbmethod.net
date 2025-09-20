module.exports = [
"[project]/.next-internal/server/app/[[...mdxPath]]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}),
"[project]/content/_app.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ...pageProps
    }, void 0, false, {
        fileName: "[project]/content/_app.js",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[project]/content/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    index: 'Welcome',
    tutorial: {
        title: 'Tutorial'
    },
    advanced: {
        title: 'Advanced'
    },
    variations: {
        title: 'Variations'
    },
    /*'3x3oh': {
    title: '3x3 One-Handed',
    type: 'page'
  },*/ 'big-cubes': {
        title: '4x4+'
    },
    'other-resources': 'Other Resources'
};
}),
"[project]/content/advanced/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    pair: 'Advanced BR Pair',
    zbll: 'Advanced Last Layer (ZBLL)'
};
}),
"[project]/mdx-components.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMDXComponents",
    ()=>useMDXComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$mdx$2d$components$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra-theme-docs/dist/mdx-components/index.js [app-rsc] (ecmascript)"); // nextra-theme-blog or your custom theme
;
// Get the default MDX components
const themeComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2d$theme$2d$docs$2f$dist$2f$mdx$2d$components$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])();
function useMDXComponents(components) {
    return {
        ...themeComponents,
        ...components
    };
}
}),
"[project]/content/advanced/pair.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "Solving the BR Pair Algorithmically",
    "filePath": "content/advanced/pair.mdx",
    "timestamp": 1758384364947
};
const sourceCode = "# Solving the BR Pair Algorithmically\nAfter you have got comfortable with all the algorithms of APB, you should start learning the optimal solutions for solving the back-right pair. This is especially important for the cases where the edge is misoriented.\n\nThe algorithms can be found [here](https://docs.google.com/spreadsheets/d/1U1nwq_-HLeDgajuAOVRaH2Jo7X9zSTEBrnIRSv3hzeg/edit?gid=983211243#gid=983211243).";
function useTOC(props) {
    return [];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h1: "h1",
        p: "p",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "Solving the BR Pair Algorithmically"
            }, void 0, false, {
                fileName: "[project]/content/advanced/pair.mdx.tsx",
                lineNumber: 22,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "After you have got comfortable with all the algorithms of APB, you should start learning the optimal solutions for solving the back-right pair. This is especially important for the cases where the edge is misoriented."
            }, void 0, false, {
                fileName: "[project]/content/advanced/pair.mdx.tsx",
                lineNumber: 22,
                columnNumber: 90
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "The algorithms can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://docs.google.com/spreadsheets/d/1U1nwq_-HLeDgajuAOVRaH2Jo7X9zSTEBrnIRSv3hzeg/edit?gid=983211243#gid=983211243",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/advanced/pair.mdx.tsx",
                        lineNumber: 22,
                        columnNumber: 395
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/advanced/pair.mdx.tsx",
                lineNumber: 22,
                columnNumber: 348
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/advanced/zbll.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "Advanced Last Layer (ZBLL)",
    "filePath": "content/advanced/zbll.mdx",
    "timestamp": 1758384363254
};
;
const sourceCode = "import Image from 'next/image'\n\n<Image src=\"/images/tutorial/pair.svg\" width={200} height={200} alt=\"Image of a cube with the BR pair solved\"/>\n# 2. Solving the BR Pair\n**Solving the dBR pair** is the second step of APB. This is probably the most trivial step, as it can be completed **intuitively** and CFOP-solvers will already be familiar with it.\n\n## Oriented BR Edge\nIf the BR edge is oriented (e.g. its back color is on top, bottom or at the front right), the standard CFOP solution will be the fastest most of the time. It is, however, often possible not to undo R-moves (see example).\n<twisty-player\n    experimentalStickeringMaskOrbits=\"EDGES:-I--IIII--I-,CORNERS:-I--IIII\"\n    experimental-setup-anchor=\"end\"\n    experimental-setup-alg=\"x2\"\n    alg=\"R U' R\"\n    hint-facelets=\"none\"\n    camera-latitude=\"45\"\n    camera-longitude=\"25\"\n    color-scheme=\"dark\"\n/>\n\n## Misoriented BR Edge\nWhen the BR edge is misoriented (e.g. its right color is on top, bottom, at the front right or back right), there are often **fast solutions using S-moves** (see example). If there is no fancy S-move solution, you can connect the two pieces and then insert them by doing `f R' f'`.\n<twisty-player\n    experimentalStickeringMaskOrbits=\"EDGES:-I--IIII--I-,CORNERS:-I--IIII\"\n    experimental-setup-anchor=\"end\"\n    experimental-setup-alg=\"x2\"\n    alg=\"S R' S'\"\n    hint-facelets=\"none\"\n    camera-latitude=\"45\"\n    camera-longitude=\"25\"\n    color-scheme=\"dark\"\n/>\n\n## Algorithm Sheet\n**For some cases**, especially those with a misoriented edge, **learning the most efficient solution is really helpful**. Those solutions can be found in [Liam Highducheck's sheet](https://docs.google.com/spreadsheets/d/1U1nwq_-HLeDgajuAOVRaH2Jo7X9zSTEBrnIRSv3hzeg/edit?gid=983211243#gid=983211243).";
function useTOC(props) {
    return [
        {
            value: "How to Approach Learning ZBLL",
            id: "how-to-approach-learning-zbll",
            depth: 2
        },
        {
            value: "Algorithm Sources",
            id: "algorithm-sources",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h1: "h1",
        h2: "h2",
        li: "li",
        ol: "ol",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/advanced/zbll.svg",
                width: 200,
                height: 200,
                alt: "Image of a cube with an EOPair case",
                lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&r=y35x-25&bg=t&fc=dydyyydyddddrrrrrrdddbbbbbb"
            }, void 0, false, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "Advanced Last Layer (ZBLL)"
            }, void 0, false, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 247
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "If you have gotten comfortable with APB and have already learned full LXS, you should really start thinking about learning ZBLL. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "APB was developed with ZBLL in mind"
                    }, void 0, false, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 464
                    }, this),
                    " and it is really only competitive at a high level if you know ZBLL."
                ]
            }, void 0, true, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 316
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "ZBLL solves the whole ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "last layer in one step"
                    }, void 0, false, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 679
                    }, this),
                    ". Because in APB, the edges are all oriented, the number of algorithms for this step is “only” 493. 21 of those are the PLL cases which you probably already know. ZBLL is divided into eight subsets, corresponding to the cross solved OLL cases and PLL: U, T, L, Pi, H, Sune, Antisune and PLL. These subsets all consist of 72 algorithms, except for H (48) and PLL (21). The recommended order for learning ZBLL is the following:"
                ]
            }, void 0, true, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 638
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                start: "0",
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "PLL"
                    }, void 0, false, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 1229
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "U, T and L"
                    }, void 0, false, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 1275
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Pi and H"
                    }, void 0, false, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 1328
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Sune and Antisune"
                    }, void 0, false, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 1379
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 1197
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 1462
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "It is recommended, to set yourself a goal of ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "N cases per M days"
                    }, void 0, false, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 1594
                    }, this),
                    ". A reasonable example would be twelve cases (a sub-subset) per week. However, you should not set a goal like one case per day. It is better to learn multiple cases on the same day and then use the following days for their repetition. To train your cases, you can use ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://bestsiteever.net/zbll",
                        children: "bestsiteever.net/zbll"
                    }, void 0, false, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 1929
                    }, this),
                    " and select the cases you are learning right now."
                ]
            }, void 0, true, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 1530
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 2097
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "There are multiple sites where you can find ZBLL algorithms. Some of them are listed below:"
            }, void 0, false, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 2165
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://speedcubedb.com/a/ZBLL",
                                children: "SpeedCubeDB ZBLL"
                            }, void 0, false, {
                                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                                lineNumber: 36,
                                columnNumber: 2335
                            }, this),
                            ": big selection of algorithms, but the top algorithm is often not the best one"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 2319
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/spreadsheets/d/1BiQZkCZvTDRlW6Y6jTBHXPPjZF9k55x8YJgXXs5nhCs/",
                                children: "Teri’s ZBLL"
                            }, void 0, false, {
                                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                                lineNumber: 36,
                                columnNumber: 2545
                            }, this),
                            ": really optimised algorithms, but getting the right fingertricks can be tricky. These algorithms require a lot of practice and might be riskier than you’d like."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 2529
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/spreadsheets/d/1-uwmZHf4vwJxFgeB3-TiF8MQ0RFSS30d5CUK96PoIwk/",
                                children: "Juju ZBLL"
                            }, void 0, false, {
                                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                                lineNumber: 36,
                                columnNumber: 2887
                            }, this),
                            ": good algorithms that are used by a world-class ZBLL user. Sometimes there are better algorithms available."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 2871
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://pepkin88.me/zbll-explorer/",
                                children: "ZBLL Explorer"
                            }, void 0, false, {
                                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                                lineNumber: 36,
                                columnNumber: 3174
                            }, this),
                            ": big selection of algorithms, better ranking than SpeedCubeDB’s, shows the relation between cases"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/advanced/zbll.mdx.tsx",
                        lineNumber: 36,
                        columnNumber: 3158
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/advanced/zbll.mdx.tsx",
                lineNumber: 36,
                columnNumber: 2297
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/big-cubes/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    meyer: 'Meyer',
    yaupb: 'YauPB',
    algs: 'More Ergonomic Algorithms'
};
}),
"[project]/content/big-cubes/algs.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "More Ergonomic Algorithms",
    "filePath": "content/big-cubes/algs.mdx",
    "timestamp": 1758384362296
};
const sourceCode = "# More Ergonomic Algorithms\nOn big cubes, algorithms with S-moves might be a problem. Since S-moves are the reason EO is so efficient, using only RUF algorithms makes the average movecount almost 3 moves higher. Especially for the cases where the DR edge is misoriented, it is recommended to do the S-move algorithms, even on 7x7. That said, some of the other cases are not too bad using only RUF. The RUF EO algorithms can be found [here](https://docs.google.com/spreadsheets/d/1fjuIZvBnhMOp90Ify5DWr_Yh3YS0ewuukODGb16kSoA/edit?usp=sharing). \n\nFor LXS, it is recommended to avoid using algorithms with D-, and S-moves. You can choose alternative solutions in the [regular LXS sheet](https://docs.google.com/spreadsheets/d/1P2DB0SyA1BrezYJ_g7RJ7_l32Ilxq7lLtr53zlG_TUU/).";
function useTOC(props) {
    return [];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h1: "h1",
        p: "p",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "More Ergonomic Algorithms"
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/algs.mdx.tsx",
                lineNumber: 22,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "On big cubes, algorithms with S-moves might be a problem. Since S-moves are the reason EO is so efficient, using only RUF algorithms makes the average movecount almost 3 moves higher. Especially for the cases where the DR edge is misoriented, it is recommended to do the S-move algorithms, even on 7x7. That said, some of the other cases are not too bad using only RUF. The RUF EO algorithms can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://docs.google.com/spreadsheets/d/1fjuIZvBnhMOp90Ify5DWr_Yh3YS0ewuukODGb16kSoA/edit?usp=sharing",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/algs.mdx.tsx",
                        lineNumber: 22,
                        columnNumber: 504
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/big-cubes/algs.mdx.tsx",
                lineNumber: 22,
                columnNumber: 80
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "For LXS, it is recommended to avoid using algorithms with D-, and S-moves. You can choose alternative solutions in the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://docs.google.com/spreadsheets/d/1P2DB0SyA1BrezYJ_g7RJ7_l32Ilxq7lLtr53zlG_TUU/",
                        children: "regular LXS sheet"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/algs.mdx.tsx",
                        lineNumber: 22,
                        columnNumber: 816
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/big-cubes/algs.mdx.tsx",
                lineNumber: 22,
                columnNumber: 678
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/big-cubes/meyer.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/steps.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/callout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "Meyer Method for 4x4+",
    "filePath": "content/big-cubes/meyer.mdx",
    "timestamp": 1758384364147
};
;
;
const sourceCode = "import { Steps, Callout } from 'nextra/components'\nimport Image from 'next/image'\n\n<Image src=\"/images/big-cubes/meyer/meyer.svg\" width={200} height={200} alt=\"Image of the Meyer Method on a 4x4x4\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&r=y-35x25&fc=ddddddddddddddddddddddddddddddddddddbdddbdddbdddwdddwdddwdddwdddddddoooooooooooo\"/>\n# Meyer Method for 4x4+ \nThe Meyer method was originally developped for solvers using Roux, but since both APB and Roux usually start with a 1x2x3 block, Meyer can be used with APB as well. This tutorial is explained using a 4x4, but Meyer is used on bigger puzzles as well.\n\n<Callout type=\"info\">\n    This tutorial is written for people who can already solve a 4x4 using other methods.\n</Callout>\n\n## Tutorial\n<Steps>\n    {<h3>Solve two opposite centers</h3>}\n        <Image src=\"/images/big-cubes/meyer/two-centers.svg\" width={170} height={170} alt=\"Image of a 4x4x4 with the first two centers solved\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&fc=dddddooddooddddddddddddddddddddddddddddddddddddddddddrrddrrddddddddddddddddddddddddddddddddddddd\"/>\n        As the first step, **two opposite centers are solved**. One of these centers will be your L-face color for the 1x2x3 block. If you can only solve with a specific block color, make sure to choose the correct centers to solve here.\n    {<h3>Create a 1x2x3 block on the bottom-left</h3>}\n        <Image src=\"/images/big-cubes/meyer/1x2x3.svg\" width={170} height={170} alt=\"Image of a 4x4x4 with the 1x2x3 solved\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=20&fo=70&r=y-35x25&fc=dddddddddddddddddddddrrddrrdddddddddbdddbdddbdddwdddwdddwdddwdddddddoooooooooooodddddddgdddgdddg\"/>\n        After creating the first two centers, you can **create a 1x2x3 block on the left side** of the cube. To achieve this, you can use block building. If you are struggling to find efficient solutions, try first pairing the DL dedge by bringing both wings to DF and then solving the dedge. Then you can attach two F2L pairs. You can think of the two pairs as regular pairs, just with one more piece.\n    {<h3>Solve the remaining centers</h3>}\n        <Image src=\"/images/big-cubes/meyer/centers.svg\" width={170} height={170} alt=\"Image of a 4x4x4 with the remaining centers solved\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=20&fo=70&r=y-35x25&fc=dddddbbddbbddddddddddrrddrrdddddddddbwwdbwwdbdddwdddwggdwggdwdddddddoooooooooooodddddyygdyygdddg\"/>\n        Now, you can **solve the remaining centers** using R-, 2Rw-, 3Rw- and U-moves.\n    {<h3>Pair the remaining wings</h3>}\n        <Image src=\"/images/big-cubes/meyer/edges.svg\" width={170} height={170} alt=\"Image of a 4x4x4 with the remaining edges solved\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=20&fo=70&r=y-35x25&fc=yrrooggroggrryyoyggyrrrbrrrbwyygbbbgbyyybyyybwwrwggbwbbgwbbgwwwrbyyyoooooooooooogwworwwgrwwgwbbg\"/>\n        To **pair the remaining wings**, you should first do a `y' x'`-rotation. Then you should first solve any dedge and put it into DF. Now you can pair the other edges using [3-2-3 edge pairing](https://www.speedsolving.com/wiki/index.php?title=Edge_pairing#3-2-3_edge_pairing) on 4x4 or [Freeslice](https://www.speedsolving.com/wiki/index.php?title=Edge_pairing#Freeslice_edge_pairing) on bigger cubes. \n        <Callout type=\"warning\">\n            If you insert pieces into back slots during edge pairing, make sure you place an unsolved corner at that slot using D-moves (for example by inserting an edge into BR using `D R' U' R D'` instead of `R' U' R`). **Otherwise you will destroy your 1x2x3!**\n        </Callout>\n    {<h3>Solve like a 3x3</h3>}\n        Finally you can undo the `y' x'`-rotation and solve **the cube normally.** Your next step is solving the DF and DB edges to complete the 2x2x3.\n\n</Steps>\n\n### Dealing with Parity\nFor cases where you do not recognize that you have parity (on 4x4 and one 6x6 case), you should solve OLL parity before solving edge orientation. In the other cases it should be solved immediately after pairing the wings.\n\nPLL parity should be done during the last layer. If you use OCLL + PLL, you should correct PLL parity before or after PLL, if you use ZBLL, you should correct it before or after ZBLL.\n\n## Learning more Optimized Algorithms\nTips on which algorithms to use on big cubes can be found [here](/big-cubes/algs.mdx).";
function useTOC(props) {
    return [
        {
            value: "Tutorial",
            id: "tutorial",
            depth: 2
        },
        {
            value: "Dealing with Parity",
            id: "dealing-with-parity",
            depth: 3
        },
        {
            value: "Learning more Optimized Algorithms",
            id: "learning-more-optimized-algorithms",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        code: "code",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        p: "p",
        strong: "strong",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/big-cubes/meyer/meyer.svg",
                width: 200,
                height: 200,
                alt: "Image of the Meyer Method on a 4x4x4",
                lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&r=y-35x25&fc=ddddddddddddddddddddddddddddddddddddbdddbdddbdddwdddwdddwdddwdddddddoooooooooooo"
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "Meyer Method for 4x4+"
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 319
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "The Meyer method was originally developped for solvers using Roux, but since both APB and Roux usually start with a 1x2x3 block, Meyer can be used with APB as well. This tutorial is explained using a 4x4, but Meyer is used on bigger puzzles as well."
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 383
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: "This tutorial is written for people who can already solve a 4x4 using other methods."
                }, void 0, false, {
                    fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                    lineNumber: 40,
                    columnNumber: 694
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 673
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 829
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve two opposite centers"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 905
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/big-cubes/meyer/two-centers.svg",
                        width: 170,
                        height: 170,
                        alt: "Image of a 4x4x4 with the first two centers solved",
                        lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&fc=dddddooddooddddddddddddddddddddddddddddddddddddddddddrrddrrddddddddddddddddddddddddddddddddddddd"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 941
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "As the first step, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "two opposite centers are solved"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 1322
                            }, this),
                            ". One of these centers will be your L-face color for the 1x2x3 block. If you can only solve with a specific block color, make sure to choose the correct centers to solve here."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 1284
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Create a 1x2x3 block on the bottom-left"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 1594
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/big-cubes/meyer/1x2x3.svg",
                        width: 170,
                        height: 170,
                        alt: "Image of a 4x4x4 with the 1x2x3 solved",
                        lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=20&fo=70&r=y-35x25&fc=dddddddddddddddddddddrrddrrdddddddddbdddbdddbdddwdddwdddwdddwdddddddoooooooooooodddddddgdddgdddg"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 1643
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "After creating the first two centers, you can ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "create a 1x2x3 block on the left side"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 2047
                            }, this),
                            " of the cube. To achieve this, you can use block building. If you are struggling to find efficient solutions, try first pairing the DL dedge by bringing both wings to DF and then solving the dedge. Then you can attach two F2L pairs. You can think of the two pairs as regular pairs, just with one more piece."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 1982
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve the remaining centers"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 2457
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/big-cubes/meyer/centers.svg",
                        width: 170,
                        height: 170,
                        alt: "Image of a 4x4x4 with the remaining centers solved",
                        lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=20&fo=70&r=y-35x25&fc=dddddbbddbbddddddddddrrddrrdddddddddbwwdbwwdbdddwdddwggdwggdwdddddddoooooooooooodddddyygdyygdddg"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 2494
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "Now, you can ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "solve the remaining centers"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 2879
                            }, this),
                            " using R-, 2Rw-, 3Rw- and U-moves."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 2847
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Pair the remaining wings"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 3006
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/big-cubes/meyer/edges.svg",
                        width: 170,
                        height: 170,
                        alt: "Image of a 4x4x4 with the remaining edges solved",
                        lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=20&fo=70&r=y-35x25&fc=yrrooggroggrryyoyggyrrrbrrrbwyygbbbgbyyybyyybwwrwggbwbbgwbbgwwwrbyyyoooooooooooogwworwwgrwwgwbbg"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 3040
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "To ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "pair the remaining wings"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 3411
                            }, this),
                            ", you should first do a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "y' x'"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 3508
                            }, this),
                            "-rotation. Then you should first solve any dedge and put it into DF. Now you can pair the other edges using ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://www.speedsolving.com/wiki/index.php?title=Edge_pairing#3-2-3_edge_pairing",
                                children: "3-2-3 edge pairing"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 3666
                            }, this),
                            " on 4x4 or ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://www.speedsolving.com/wiki/index.php?title=Edge_pairing#Freeslice_edge_pairing",
                                children: "Freeslice"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 3823
                            }, this),
                            " on bigger cubes."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 3389
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                        type: "warning",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                            children: [
                                "If you insert pieces into back slots during edge pairing, make sure you place an unsolved corner at that slot using D-moves (for example by inserting an edge into BR using ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                    children: "D R' U' R D'"
                                }, void 0, false, {
                                    fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                    lineNumber: 40,
                                    columnNumber: 4212
                                }, this),
                                " instead of ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                    children: "R' U' R"
                                }, void 0, false, {
                                    fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                    lineNumber: 40,
                                    columnNumber: 4281
                                }, this),
                                "). ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                    children: "Otherwise you will destroy your 1x2x3!"
                                }, void 0, false, {
                                    fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                    lineNumber: 40,
                                    columnNumber: 4336
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                            lineNumber: 40,
                            columnNumber: 4021
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 3997
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve like a 3x3"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 4446
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "Finally you can undo the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "y' x'"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 4516
                            }, this),
                            "-rotation and solve ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "the cube normally."
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 4586
                            }, this),
                            " Your next step is solving the DF and DB edges to complete the 2x2x3."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 4472
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 897
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 4752
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "For cases where you do not recognize that you have parity (on 4x4 and one 6x6 case), you should solve OLL parity before solving edge orientation. In the other cases it should be solved immediately after pairing the wings."
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 4820
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "PLL parity should be done during the last layer. If you use OCLL + PLL, you should correct PLL parity before or after PLL, if you use ZBLL, you should correct it before or after ZBLL."
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 5082
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 5306
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Tips on which algorithms to use on big cubes can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "/big-cubes/algs",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 5451
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/big-cubes/meyer.mdx.tsx",
                lineNumber: 40,
                columnNumber: 5374
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/big-cubes/yaupb.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/steps.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/callout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "YauPB for 4x4+",
    "filePath": "content/big-cubes/yaupb.mdx",
    "timestamp": 1758384364889
};
;
;
const sourceCode = "import { Steps, Callout } from 'nextra/components'\nimport Image from 'next/image'\n\n<Image src=\"/images/big-cubes/yaupb/yaupb.svg\" width={200} height={200} alt=\"Image of YauPB on a 4x4x4\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&r=y-35x25&fc=dddddddddddddddddddddddddddddddddddddbbddbbddbbddwwdwwwdwwwddwwddddddooddooddood\"/>\n# YauPB for 4x4+\nYauPB is the most similar to regular Yau with CFOP. Since you always have to solve your 2x2x3 by first solving three cross pieces and then two F2L pairs, this is not really the recommended method. In most cases, [Meyer](/big-cubes/meyer.mdx) will be better. What you can do is choosing to do YauPB when you see a very easy white or yellow center (if those are your U/F-colors). In that case, the slightly slower 2x2x3 will be worth it. This tutorial is explained using 4x4, but YauPB can be used on bigger cubes as well.\n\n<Callout type=\"info\">\n    This tutorial is written for people who can already solve a 4x4 using other methods.\n</Callout>\n\n## Tutorial\n<Steps>\n    {<h3>Solve two opposite centers</h3>}\n        <Image src=\"/images/big-cubes/yaupb/two-centers.svg\" width={170} height={170} alt=\"Image of a 4x4x4 with the first two centers solved\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&fc=dddddwwddwwddddddddddddddddddddddddddddddddddddddddddyyddyyddddddddddddddddddddddddddddddddddddd\"/>\n        As the first step, **two opposite centers are solved**. One of these centers will be your D-face color for the 2x2x3 block. If you can only solve with a specific block color, make sure to choose the correct centers to solve here.\n    {<h3>Solve three cross pieces</h3>}\n        <Image src=\"/images/big-cubes/yaupb/three-cross-pieces.svg\" width={170} height={170} alt=\"Image of a 4x4x4 with three cross pieces solved\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&r=y-35x25&fc=dddddyyddyyddddddddddddddddddddddddddddddddddbbddwwdwwwdwwwddwwddddddddddddddooddddddddddddddggd\"/>\n        Next, you can **solve three cross edges** by connecting wings in the E slices. Make sure you put the cross pieces in the correct order.\n    {<h3>Solve the remaining centers</h3>}\n        <Image src=\"/images/big-cubes/yaupb/centers.svg\" width={170} height={170} alt=\"Image of a 4x4x4 with the remaining centers solved\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&r=y-35x25&fc=dddddrrddrrddddddddddyyddyydddddddddgggdgggdddddddddooodooodddddddddwwwwwwwwdwwddddddbbbdbbbdddd\"/>\n        After having solved the three cross pieces, you can hold them in the bottom left with the white side facing left. Then, you can **solve the remaining centers** using R-, 2Rw-, 3Rw- and U-moves.\n    {<h3>Solve the remaining edges</h3>}\n        <Image src=\"/images/big-cubes/yaupb/edges.svg\" width={170} height={170} alt=\"Image of a 4x4x4 with the remaining edges solved\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&r=y-35x25&fc=ybbwrrrorrroryywryyoyyyryyyrbggyyrrgggggggggoyyrbbbyoooooooowrroowwgwwwwwwwwrwwwgooggbbbgbbbbbbb\"/>\n        To **pair the remaining wings**, you should first do a `y' x'`-rotation. Then you should first solve any dedge and put it into DF. Now you can pair the other edges using [3-2-3 edge pairing](https://www.speedsolving.com/wiki/index.php?title=Edge_pairing#3-2-3_edge_pairing) on 4x4 or [Freeslice](https://www.speedsolving.com/wiki/index.php?title=Edge_pairing#Freeslice_edge_pairing) on bigger cubes. \n    {<h3>Solve like a 3x3</h3>}\n        Finally you can undo the `y' x'`-rotation and solve **the cube normally.** Next, you must solve the F2L pairs on the left side to complete the 2x2x3.\n\n</Steps>\n\n### Dealing with Parity\nFor cases where you do not recognize that you have parity (on 4x4 and one 6x6 case), you should solve OLL parity before solving edge orientation. In the other cases it should be solved immediately after pairing the wings.\n\nPLL parity should be done during the last layer. If you use OCLL + PLL, you should correct PLL parity before or after PLL, if you use ZBLL, you should correct it before or after ZBLL.\n\n## Learning more Optimized Algorithms\nTips on which algorithms to use on big cubes can be found [here](/big-cubes/algs.mdx).";
function useTOC(props) {
    return [
        {
            value: "Tutorial",
            id: "tutorial",
            depth: 2
        },
        {
            value: "Dealing with Parity",
            id: "dealing-with-parity",
            depth: 3
        },
        {
            value: "Learning more Optimized Algorithms",
            id: "learning-more-optimized-algorithms",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        code: "code",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        p: "p",
        strong: "strong",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/big-cubes/yaupb/yaupb.svg",
                width: 200,
                height: 200,
                alt: "Image of YauPB on a 4x4x4",
                lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&r=y-35x25&fc=dddddddddddddddddddddddddddddddddddddbbddbbddbbddwwdwwwdwwwddwwddddddooddooddood"
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "YauPB for 4x4+"
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 308
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "YauPB is the most similar to regular Yau with CFOP. Since you always have to solve your 2x2x3 by first solving three cross pieces and then two F2L pairs, this is not really the recommended method. In most cases, ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "/big-cubes/meyer",
                        children: "Meyer"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 596
                    }, this),
                    " will be better. What you can do is choosing to do YauPB when you see a very easy white or yellow center (if those are your U/F-colors). In that case, the slightly slower 2x2x3 will be worth it. This tutorial is explained using 4x4, but YauPB can be used on bigger cubes as well."
                ]
            }, void 0, true, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 365
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: "This tutorial is written for people who can already solve a 4x4 using other methods."
                }, void 0, false, {
                    fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                    lineNumber: 40,
                    columnNumber: 986
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 965
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 1121
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve two opposite centers"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 1197
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/big-cubes/yaupb/two-centers.svg",
                        width: 170,
                        height: 170,
                        alt: "Image of a 4x4x4 with the first two centers solved",
                        lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&fc=dddddwwddwwddddddddddddddddddddddddddddddddddddddddddyyddyyddddddddddddddddddddddddddddddddddddd"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 1233
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "As the first step, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "two opposite centers are solved"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 1614
                            }, this),
                            ". One of these centers will be your D-face color for the 2x2x3 block. If you can only solve with a specific block color, make sure to choose the correct centers to solve here."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 1576
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve three cross pieces"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 1886
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/big-cubes/yaupb/three-cross-pieces.svg",
                        width: 170,
                        height: 170,
                        alt: "Image of a 4x4x4 with three cross pieces solved",
                        lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&r=y-35x25&fc=dddddyyddyyddddddddddddddddddddddddddddddddddbbddwwdwwwdwwwddwwddddddddddddddooddddddddddddddggd"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 1920
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "Next, you can ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "solve three cross edges"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 2314
                            }, this),
                            " by connecting wings in the E slices. Make sure you put the cross pieces in the correct order."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 2281
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve the remaining centers"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 2497
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/big-cubes/yaupb/centers.svg",
                        width: 170,
                        height: 170,
                        alt: "Image of a 4x4x4 with the remaining centers solved",
                        lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&r=y-35x25&fc=dddddrrddrrddddddddddyyddyydddddddddgggdgggdddddddddooodooodddddddddwwwwwwwwdwwddddddbbbdbbbdddd"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 2534
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "After having solved the three cross pieces, you can hold them in the bottom left with the white side facing left. Then, you can ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "solve the remaining centers"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 3034
                            }, this),
                            " using R-, 2Rw-, 3Rw- and U-moves."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 2887
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve the remaining edges"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 3161
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/big-cubes/yaupb/edges.svg",
                        width: 170,
                        height: 170,
                        alt: "Image of a 4x4x4 with the remaining edges solved",
                        lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&bg=t&pzl=4&co=10&fo=70&r=y-35x25&fc=ybbwrrrorrroryywryyoyyyryyyrbggyyrrgggggggggoyyrbbbyoooooooowrroowwgwwwwwwwwrwwwgooggbbbgbbbbbbb"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 3196
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "To ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "pair the remaining wings"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 3567
                            }, this),
                            ", you should first do a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "y' x'"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 3664
                            }, this),
                            "-rotation. Then you should first solve any dedge and put it into DF. Now you can pair the other edges using ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://www.speedsolving.com/wiki/index.php?title=Edge_pairing#3-2-3_edge_pairing",
                                children: "3-2-3 edge pairing"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 3822
                            }, this),
                            " on 4x4 or ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://www.speedsolving.com/wiki/index.php?title=Edge_pairing#Freeslice_edge_pairing",
                                children: "Freeslice"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 3979
                            }, this),
                            " on bigger cubes."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 3545
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve like a 3x3"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 4154
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "Finally you can undo the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "y' x'"
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 4224
                            }, this),
                            "-rotation and solve ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "the cube normally."
                            }, void 0, false, {
                                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                                lineNumber: 40,
                                columnNumber: 4294
                            }, this),
                            " Next, you must solve the F2L pairs on the left side to complete the 2x2x3."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 4180
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 1189
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 4466
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "For cases where you do not recognize that you have parity (on 4x4 and one 6x6 case), you should solve OLL parity before solving edge orientation. In the other cases it should be solved immediately after pairing the wings."
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 4534
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "PLL parity should be done during the last layer. If you use OCLL + PLL, you should correct PLL parity before or after PLL, if you use ZBLL, you should correct it before or after ZBLL."
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 4796
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 5020
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Tips on which algorithms to use on big cubes can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "/big-cubes/algs",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                        lineNumber: 40,
                        columnNumber: 5165
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/big-cubes/yaupb.mdx.tsx",
                lineNumber: 40,
                columnNumber: 5088
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/index.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/steps.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "Welcome to the APB Method Website",
    "filePath": "content/index.mdx",
    "timestamp": 1758384360735
};
;
;
const sourceCode = "import { Steps } from 'nextra/components'\nimport Image from 'next/image'\n\n<Image src=\"/images/apb_icon.svg\" width={250} height={250} alt=\"APB Icon\"/>\n# Welcome to the APB Method Website\nWelcome to **apbmethod.net**! This site is a learning resource for all levels of APB solvers. If you are looking for a tutorial on the method, see [here](/tutorial).\n\n## The APB Method\nAPB is a **3x3 speedsolving method** proposed by **James Straughan aka. Athefre** in 2021. You can check out his overview [here](https://sites.google.com/view/apb-system/overview). Having a movecount of about 48-50 moves and being very algorithm-based, it has **a lot of potential** for being fast at a high level.\n\nStandard APB consists of 5 steps:\n<Steps>\n    {<h3>2x2x3 block on the left side</h3>}\n    Solve a 2x2x3 block in the bottom-left. This is usually accomplished by building a Roux-style 1x2x3 block and then extending it by solving the DF and DB edges.\n\n    {<h3>Solving the back-right F2L-pair</h3>}\n    The back-right F2L pair is solved intuitively.\n\n    {<h3>Solve the edge-orientation of the remaining edges (EO)</h3>}\n    The edge-orientation of the remaining edges is solved algorithmically (11 algorithms).\n\n    {<h3>Solve the last three F2L pieces (LXS)</h3>}\n    The remaining three F2L pieces are solved algorithmically (116 algorithms).\n\n    {<h3>Solve the last layer</h3>}\n    The last layer is solved using either OCLL + PLL or ZBLL, which consists of 493 algorithms.\n</Steps>\n\n## About Me\nHi, this is [JustEnoughAlgorithms](https://www.youtube.com/@justenoughalgorithms) and I'm the creator of this website. I've been using APB since autumn of 2023 and have been using it in competition ever since. I've managed to beat all of my old PBs that I had set with Roux. [My WCA Profile](https://www.worldcubeassociation.org/persons/2022PERR01)\n\n## About this site\nThis website was very much inspired by [zzmethod.com](https://zzmethod.com) made by [crystalcuber](https://www.youtube.com/@crystalcuber). It was created using [nextra](https://nextra.site).\n\n## Contribute\nIf you have an idea or want to contribute, create an issue on this book's [GitHub Page](https://github.com/phalentin/apbmethod.net) or create a pull request.";
function useTOC(props) {
    return [
        {
            value: "The APB Method",
            id: "the-apb-method",
            depth: 2
        },
        {
            value: "About Me",
            id: "about-me",
            depth: 2
        },
        {
            value: "About this site",
            id: "about-this-site",
            depth: 2
        },
        {
            value: "Contribute",
            id: "contribute",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h1: "h1",
        h2: "h2",
        p: "p",
        strong: "strong",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/apb_icon.svg",
                width: 250,
                height: 250,
                alt: "APB Icon"
            }, void 0, false, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "Welcome to the APB Method Website"
            }, void 0, false, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 94
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Welcome to ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "apbmethod.net"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 200
                    }, this),
                    "! This site is a learning resource for all levels of APB solvers. If you are looking for a tutorial on the method, see ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "/tutorial",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 381
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 170
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 464
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "APB is a ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "3x3 speedsolving method"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 560
                    }, this),
                    " proposed by ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "James Straughan aka. Athefre"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 645
                    }, this),
                    " in 2021. You can check out his overview ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://sites.google.com/view/apb-system/overview",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 763
                    }, this),
                    ". Having a movecount of about 48-50 moves and being very algorithm-based, it has ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "a lot of potential"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 944
                    }, this),
                    " for being fast at a high level."
                ]
            }, void 0, true, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 532
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Standard APB consists of 5 steps:"
            }, void 0, false, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 1065
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "2x2x3 block on the left side"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1147
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "Solve a 2x2x3 block in the bottom-left. This is usually accomplished by building a Roux-style 1x2x3 block and then extending it by solving the DF and DB edges."
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1185
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solving the back-right F2L-pair"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1380
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "The back-right F2L pair is solved intuitively."
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1421
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve the edge-orientation of the remaining edges (EO)"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1503
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "The edge-orientation of the remaining edges is solved algorithmically (11 algorithms)."
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1567
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve the last three F2L pieces (LXS)"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1689
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "The remaining three F2L pieces are solved algorithmically (116 algorithms)."
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1736
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve the last layer"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1847
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "The last layer is solved using either OCLL + PLL or ZBLL, which consists of 493 algorithms."
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 1877
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 1139
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 2017
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Hi, this is ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://www.youtube.com/@justenoughalgorithms",
                        children: "JustEnoughAlgorithms"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 2116
                    }, this),
                    " and I’m the creator of this website. I’ve been using APB since autumn of 2023 and have been using it in competition ever since. I’ve managed to beat all of my old PBs that I had set with Roux. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://www.worldcubeassociation.org/persons/2022PERR01",
                        children: "My WCA Profile"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 2422
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 2085
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 2556
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "This website was very much inspired by ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://zzmethod.com",
                        children: "zzmethod.com"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 2682
                    }, this),
                    " made by ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://www.youtube.com/@crystalcuber",
                        children: "crystalcuber"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 2770
                    }, this),
                    ". It was created using ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://nextra.site",
                        children: "nextra"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 2889
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 2624
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[3].id,
                children: toc[3].value
            }, void 0, false, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 2984
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "If you have an idea or want to contribute, create an issue on this book’s ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://github.com/phalentin/apbmethod.net",
                        children: "GitHub Page"
                    }, void 0, false, {
                        fileName: "[project]/content/index.mdx.tsx",
                        lineNumber: 42,
                        columnNumber: 3145
                    }, this),
                    " or create a pull request."
                ]
            }, void 0, true, {
                fileName: "[project]/content/index.mdx.tsx",
                lineNumber: 42,
                columnNumber: 3052
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/other-resources.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "Other Resources",
    "filePath": "content/other-resources.mdx",
    "timestamp": 1758384366099
};
const sourceCode = "# Other Resources\n- [APB Mega Doc](https://docs.google.com/document/d/1GznSart4lglO9Q6Q5tLZazRysr5a6D5WnmQ5ouMIOnc/): All the algorithms and links to trainers for them, source of all these links\n- [APB Website by Athefre](https://sites.google.com/view/apb-system/): Short explanation of all the steps and original public source\n- [APB Discord Server](https://discord.gg/k4rX4BgmZW): Place to chat and ask questions\n- [Speedsolving Wiki Entry](https://www.speedsolving.com/wiki/index.php?title=APB): Wiki entry of the method\n  \n## Algorithms\n  \n### Pair Solving\n- [Pair Solving](https://docs.google.com/spreadsheets/d/1U1nwq_-HLeDgajuAOVRaH2Jo7X9zSTEBrnIRSv3hzeg/) by Liam Highducheck\n- [Pair Solving](https://docs.google.com/spreadsheets/d/1Agu9KUs99H2CHI_cEkkmSmwtTWMX6tjQ/) by Kombofuud\n  \n### Edge Orientation\n- [Edge Orientation](https://docs.google.com/spreadsheets/d/1Hs9ikHz-4cfbqBfqvuvE8X9sjCb4Jtm482ZvsFQA2rY/) by Athefre\n\nNote that for Standard APB you only need to learn the algorithms in the *dBR Solved EO* tab.\n\n### LXS\n- [LXS](https://docs.google.com/spreadsheets/d/1P2DB0SyA1BrezYJ_g7RJ7_l32Ilxq7lLtr53zlG_TUU/) by Athefre\n- [LXS patterns for learning](https://docs.google.com/spreadsheets/d/1ACKQXpMK0b8RWGoN9wMDbnF-W-S4mMdeJH5IcjeEyf8/) by Liam Highducheck\n  \n### ZBLL\n- [SpeedCubeDB ZBLL](https://speedcubedb.com/a/ZBLL): big selection of algorithms, but the top algorithm is often not the best one\n- [Teri's ZBLL](https://docs.google.com/spreadsheets/d/1BiQZkCZvTDRlW6Y6jTBHXPPjZF9k55x8YJgXXs5nhCs/): really optimised algorithms, but getting the right fingertricks can be tricky. These algorithms require a lot of practice and might be riskier than you'd like.\n- [Juju ZBLL](https://docs.google.com/spreadsheets/d/1-uwmZHf4vwJxFgeB3-TiF8MQ0RFSS30d5CUK96PoIwk/): good algorithms that are used by a world-class ZBLL user. Sometimes there are better algorithms available.\n- [ZBLL Explorer](https://pepkin88.me/zbll-explorer/): big selection of algorithms, better ranking than SpeedCubeDB's, shows the relation between cases\n  \n## Trainers\n- [EOPair Trainer](https://gregorycannon.github.io/EOTrainer/) by Greg Cannon\n- [LXS Trainer](https://apurplefrog.github.io/lxstrainer/) by apurplefrog\n- [ZBLL Trainer](https://bestsiteever.ru/zbll/) by Roman Strakhov";
function useTOC(props) {
    return [
        {
            value: "Algorithms",
            id: "algorithms",
            depth: 2
        },
        {
            value: "Pair Solving",
            id: "pair-solving",
            depth: 3
        },
        {
            value: "Edge Orientation",
            id: "edge-orientation",
            depth: 3
        },
        {
            value: "LXS",
            id: "lxs",
            depth: 3
        },
        {
            value: "ZBLL",
            id: "zbll",
            depth: 3
        },
        {
            value: "Trainers",
            id: "trainers",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        em: "em",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        li: "li",
        p: "p",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "Other Resources"
            }, void 0, false, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/document/d/1GznSart4lglO9Q6Q5tLZazRysr5a6D5WnmQ5ouMIOnc/",
                                children: "APB Mega Doc"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 108
                            }, this),
                            ": All the algorithms and links to trainers for them, source of all these links"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 92
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://sites.google.com/view/apb-system/",
                                children: "APB Website by Athefre"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 364
                            }, this),
                            ": Short explanation of all the steps and original public source"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 348
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://discord.gg/k4rX4BgmZW",
                                children: "APB Discord Server"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 576
                            }, this),
                            ": Place to chat and ask questions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 560
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://www.speedsolving.com/wiki/index.php?title=APB",
                                children: "Speedsolving Wiki Entry"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 742
                            }, this),
                            ": Wiki entry of the method"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 726
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 70
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 937
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 1005
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/spreadsheets/d/1U1nwq_-HLeDgajuAOVRaH2Jo7X9zSTEBrnIRSv3hzeg/",
                                children: "Pair Solving"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 1111
                            }, this),
                            " by Liam Highducheck"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 1095
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/spreadsheets/d/1Agu9KUs99H2CHI_cEkkmSmwtTWMX6tjQ/",
                                children: "Pair Solving"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 1313
                            }, this),
                            " by Kombofuud"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 1297
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 1073
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 1504
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/spreadsheets/d/1Hs9ikHz-4cfbqBfqvuvE8X9sjCb4Jtm482ZvsFQA2rY/",
                                children: "Edge Orientation"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 1610
                            }, this),
                            " by Athefre"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 1594
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 1572
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Note that for Standard APB you only need to learn the algorithms in the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "dBR Solved EO"
                    }, void 0, false, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 1905
                    }, this),
                    " tab."
                ]
            }, void 0, true, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 1814
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[3].id,
                children: toc[3].value
            }, void 0, false, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 1986
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/spreadsheets/d/1P2DB0SyA1BrezYJ_g7RJ7_l32Ilxq7lLtr53zlG_TUU/",
                                children: "LXS"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 2092
                            }, this),
                            " by Athefre"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 2076
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/spreadsheets/d/1ACKQXpMK0b8RWGoN9wMDbnF-W-S4mMdeJH5IcjeEyf8/",
                                children: "LXS patterns for learning"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 2276
                            }, this),
                            " by Liam Highducheck"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 2260
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 2054
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[4].id,
                children: toc[4].value
            }, void 0, false, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 2498
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://speedcubedb.com/a/ZBLL",
                                children: "SpeedCubeDB ZBLL"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 2604
                            }, this),
                            ": big selection of algorithms, but the top algorithm is often not the best one"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 2588
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/spreadsheets/d/1BiQZkCZvTDRlW6Y6jTBHXPPjZF9k55x8YJgXXs5nhCs/",
                                children: "Teri’s ZBLL"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 2814
                            }, this),
                            ": really optimised algorithms, but getting the right fingertricks can be tricky. These algorithms require a lot of practice and might be riskier than you’d like."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 2798
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://docs.google.com/spreadsheets/d/1-uwmZHf4vwJxFgeB3-TiF8MQ0RFSS30d5CUK96PoIwk/",
                                children: "Juju ZBLL"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 3156
                            }, this),
                            ": good algorithms that are used by a world-class ZBLL user. Sometimes there are better algorithms available."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 3140
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://pepkin88.me/zbll-explorer/",
                                children: "ZBLL Explorer"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 3443
                            }, this),
                            ": big selection of algorithms, better ranking than SpeedCubeDB’s, shows the relation between cases"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 3427
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 2566
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[5].id,
                children: toc[5].value
            }, void 0, false, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 3681
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://gregorycannon.github.io/EOTrainer/",
                                children: "EOPair Trainer"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 3787
                            }, this),
                            " by Greg Cannon"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 3771
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://apurplefrog.github.io/lxstrainer/",
                                children: "LXS Trainer"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 3944
                            }, this),
                            " by apurplefrog"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 3928
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://bestsiteever.ru/zbll/",
                                children: "ZBLL Trainer"
                            }, void 0, false, {
                                fileName: "[project]/content/other-resources.mdx.tsx",
                                lineNumber: 51,
                                columnNumber: 4097
                            }, this),
                            " by Roman Strakhov"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/other-resources.mdx.tsx",
                        lineNumber: 51,
                        columnNumber: 4081
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/other-resources.mdx.tsx",
                lineNumber: 51,
                columnNumber: 3749
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/tutorial/223.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/callout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/tabs/index.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "1. Solving a 2x2x3",
    "filePath": "content/tutorial/223.mdx",
    "timestamp": 1758384365854
};
;
;
const sourceCode = "import Image from 'next/image'\nimport { Callout, Tabs, Steps } from 'nextra/components'\n\n<Image src=\"/images/tutorial/223.svg\" width={200} height={200} alt=\"Image of a cube with the 2x2x3 block done\"/>\n# 1. Solving a 2x2x3\n<Callout type=\"info\">\n    For simplicity purposes, this tutorial will explain the method using **white on the bottom face**, even though at a higher level, solvers should be able to solve with either white or yellow on the bottom.\n</Callout>\n\n## Introduction\nThe first step of the APB method is **building a 2x2x3 block on the bottom-left side of the cube**. This can be achieved through various ways and it is ultimately up to the solver to decide on which option to choose for a particular scramble. Since this is by far the step with the most freedom, there are a lot of techniques required to consistently achieve a good movecount. Below I will show some of the most useful and consistent methods of creating the 2x2x3.\n<Callout type=\"important\">\n    Unlike in regular Petrus, the 2x2x3 in APB is always solved on the bottom-left.\n</Callout>\n\n<Callout type=\"info\">\n    When explaining methods making use of blockbuilding, **Block Referencing** is very useful to name a certain set of pieces. In block referencing, a combination of layers, for example *DF*, refers to those pieces that are in all of those layers, in this case the *DFL*, *DF*, and *DFR* pieces. This can be done with wide moves and slices as well. *dM* would therefore refer to the *DF* and *DB* edges and the *B*, *D*, and *F* centers.\n    [See more on Athefre's website](https://sites.google.com/site/athefre/steps-concepts/nbrs)\n</Callout>\n\n## 1x2x3 → 2x2x3\n<Image src=\"/images/tutorial/123-223.svg\" width={200} height={200} alt=\"Image of the 2x2x3 being solved using the 1x2x3 to 2x2x3 method\"/>\nFirst creating a **Roux-style 1x2x3** block and then adding the **DF and DB edges** is probably the most consistent way of solving the 2x2x3. On most scrambles, this way of making your 2x2x3 leads to an efficient solution.\n\n### Creating the 1x2x3\nLike with the whole 2x2x3, the 1x2x3 can also be created through various techniques. To figure out new techniques, it is recommended you **experiment a little on your own** as well. Below are some possible methods to create the 1x2x3.\n\n<Tabs items={['General Blockbuilding', 'Line', 'F2L-Style']}>\n    <Tabs.Tab>\n        <Image src=\"/images/tutorial/other-blockbuilding-123.svg\" width={120} height={120} alt=\"Image of the 1x2x3 being solved using other blockbuilding\"/>\n        Various blockbuilding techniques can be used to build the 1x2x3. If the scramble, for example, already provides the block at *Db*, the solver could first solve the *Eb* edge and center in relation to each other and then insert them. Finally, they would create and solve the pair belonging in *dF*. On many scrambles, such blockbuilding techniques lead to the best solutions.\n        #### Example Solution\n        <twisty-player\n            id=\"blockbuilding-viewer\"\n            experimentalStickeringMaskOrbits=\"EDGES:III-IIIII-I-,CORNERS:II--IIII,CENTERS:I-I-II\"\n            experimental-setup-anchor=\"end\"\n            experimental-setup-alg=\"x2\"\n            alg=\"r D' r' U R2 B'\"\n            hint-facelets=\"none\"\n            camera-latitude=\"-35\"\n            camera-longitude=\"-25\"\n            color-scheme=\"dark\"\n        />\n        <twisty-alg-viewer for=\"blockbuilding-viewer\"/>\n    </Tabs.Tab>\n    <Tabs.Tab>\n        <Image src=\"/images/tutorial/line-123.svg\" width={120} height={120} alt=\"Image of the 1x2x3 being solved using the line method\"/>\n        A 1x2x3-block can also be created using two 1x1x3 lines. These can be made in any order. If the scramble allows for it or even comes with a pre-built line, this method can lead to very efficient solutions.\n        #### Example Solution\n        <twisty-player\n            id=\"line-viewer\"\n            experimentalStickeringMaskOrbits=\"EDGES:III-IIIII-I-,CORNERS:II--IIII,CENTERS:I-I-II\"\n            experimental-setup-anchor=\"end\"\n            experimental-setup-alg=\"x2\"\n            alg=\"U' R' U' R D2 U R U R' D'\"\n            hint-facelets=\"none\"\n            camera-latitude=\"-35\"\n            camera-longitude=\"-25\"\n            color-scheme=\"dark\"\n        />\n        <twisty-alg-viewer for=\"line-viewer\"/>\n    </Tabs.Tab>\n    <Tabs.Tab>\n        <Image src=\"/images/tutorial/f2l-123.svg\" width={120} height={120} alt=\"Image of the 1x2x3 being solved using an F2L-style method\"/>\n        It is possible to create the 1x2x3 using an F2L-style approach by first solving the DL edge and then creating and inserting the two left F2L pairs. It can sometimes be a bit hard to find efficient solutions using this method, so you should always be able to solve with other techniques as well.\n        #### Example Solution\n        <twisty-player\n            id=\"f2l-viewer\"\n            experimentalStickeringMaskOrbits=\"EDGES:III-IIIII-I-,CORNERS:II--IIII,CENTERS:I-I-II\"\n            experimental-setup-anchor=\"end\"\n            experimental-setup-alg=\"x2\"\n            alg=\"D' r' R2 F r' U2 r U R2 B'\"\n            hint-facelets=\"none\"\n            camera-latitude=\"-35\"\n            camera-longitude=\"-25\"\n            color-scheme=\"dark\"\n        />\n        <twisty-alg-viewer for=\"f2l-viewer\"/>\n    </Tabs.Tab>\n</Tabs>\n\n### Solving the DFDB Edges\nAfter having created the 1x2x3 block in dL, you can **extend it to a 2x2x3** by solving the edges at DF and DB. This can be achieved in two main ways: You can either solve each of them seperately by placing them in the U-layer an then inserting them by doing `r U' r'`, `r U2 r'`, `r' U r`, or `r' U2 r` depending on the situation. The other option is creating a line consisting of the two edges and the white center in the U-layer and then inserting it by doing an `r2`-move. This method often is more efficient, especially when the edges are oriented (e.g. have their white side on the U-face, front-right, back-right or D-face).\n\n#### Examples\n<twisty-player\n    id=\"dfdb1-viewer\"\n    experimentalStickeringMaskOrbits=\"EDGES:-I-DIIIIIDID,CORNERS:IIDDIIII,CENTERS:-D----\"\n    experimental-setup-anchor=\"end\"\n    experimental-setup-alg=\"x2\"\n    alg=\"U r U' r' U r' U r\"\n    hint-facelets=\"none\"\n    camera-latitude=\"35\"\n    camera-longitude=\"25\"\n    color-scheme=\"dark\"\n/>\n<twisty-alg-viewer for=\"dfdb1-viewer\"/>\n<twisty-player\n    id=\"dfdb2-viewer\"\n    experimentalStickeringMaskOrbits=\"EDGES:-I-DIIIIIDID,CORNERS:IIDDIIII,CENTERS:-D----\"\n    experimental-setup-anchor=\"end\"\n    experimental-setup-alg=\"x2\"\n    alg=\"R' U' R M' U r2\"\n    hint-facelets=\"none\"\n    camera-latitude=\"35\"\n    camera-longitude=\"25\"\n    color-scheme=\"dark\"\n/>\n<twisty-alg-viewer for=\"dfdb2-viewer\"/>\n\n<Callout type=\"default\">\n    Instead of creating the 1x2x3 in dL and then solving the DF and DB edges, you can also create the 1x2x3 in Dl and then solve the FL and BL edges.\n</Callout>\n\n## 2x2x2 → 2x2x3\n<Image src=\"/images/tutorial/222-223.svg\" width={200} height={200} alt=\"Image of the 2x2x3 being solved using the 2x2x2 to 2x2x3 method\"/>\nAn alternative way to solve the 2x2x3 is first creating a 2x2x2 in *dbl* or *dlf* and then extending it by attaching a second 1x1x2 block in *dlF* or *dBl*. This is a very versatile technique too, but it sometimes leads to awkward fingertricks with `F2`- or `B2`-moves.\n\n### Creating the 2x2x2\n<Image src=\"/images/tutorial/222-slab.svg\" width={120} height={120} alt=\"Image of the 2x2x2 being solved using the 'slab'-technique\"/>\nOne way of creating a 2x2x2 block is by creating a 1x2x2 block in *Dbl* or *Dlf*. You can then add an edge with the correct two center pieces, creating a 2x2x2. Of course it is also possible to first create a block in *Ebl* or *Elf* and then adding the other block. As there is a lot of freedom, we recommend you experiment a bit on your own.\n\n### Extending to a 2x2x3\n<Image src=\"/images/tutorial/222-223.svg\" width={120} height={120} alt=\"Image of the 2x2x2 being extended to a 2x2x3\"/>\nTo then add another 1x2x2, you can again make use of multiple strategies. Often, you would connect one of the two edges to the center and then attach a corner-edge pair using a sequence like `R' F R` or `L F' L'`. You might even solve the two edges first and then solve the corner using a keyhole-style insert like `D R U R' D'`.\n\n## Three Cross Pieces + 2 F2L Pairs\n<Image src=\"/images/tutorial/cross_2f2l.svg\" width={200} height={200} alt=\"Image of the 2x2x3 being solved using a cross+F2L style method\"/>\n<Callout type=\"error\">\n    Even though you might be tempted to always solve your 2x2x3 like this, this is **NOT** the most efficient method and is only useful on very specific scrambles.\n</Callout>\nOn some scrambles, solving the 2x2x3 like F2L in CFOP, except without any of the pieces in the R-layer, is the fastest method. Even though the movecount might not be too low, this method does allow for high TPS. Keep in mind this is really only recommended if:\n- **at least two cross pieces are solved or solvable in one move** and\n- **at least one of the two edges belonging into FL and BL is oriented** (e.g. has its front/back color on the U-face, D-face if it is in those layers or the front/back face if it is in the E-layer).";
function useTOC(props) {
    return [
        {
            value: "Introduction",
            id: "introduction",
            depth: 2
        },
        {
            value: "1x2x3 → 2x2x3",
            id: "1x2x3--2x2x3",
            depth: 2
        },
        {
            value: "Creating the 1x2x3",
            id: "creating-the-1x2x3",
            depth: 3
        },
        {
            value: "Example Solution",
            id: "example-solution",
            depth: 4
        },
        {
            value: "Example Solution",
            id: "example-solution-1",
            depth: 4
        },
        {
            value: "Example Solution",
            id: "example-solution-2",
            depth: 4
        },
        {
            value: "Solving the DFDB Edges",
            id: "solving-the-dfdb-edges",
            depth: 3
        },
        {
            value: "Examples",
            id: "examples",
            depth: 4
        },
        {
            value: "2x2x2 → 2x2x3",
            id: "2x2x2--2x2x3",
            depth: 2
        },
        {
            value: "Creating the 2x2x2",
            id: "creating-the-2x2x2",
            depth: 3
        },
        {
            value: "Extending to a 2x2x3",
            id: "extending-to-a-2x2x3",
            depth: 3
        },
        {
            value: "Three Cross Pieces + 2 F2L Pairs",
            id: "three-cross-pieces--2-f2l-pairs",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        code: "code",
        em: "em",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tabs"]) _missingMdxReference("Tabs", false, "29:5-45:16");
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tabs"].Tab) _missingMdxReference("Tabs.Tab", true, "29:5-45:16");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/223.svg",
                width: 200,
                height: 200,
                alt: "Image of a cube with the 2x2x3 block done"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "1. Solving a 2x2x3"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 131
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: [
                        "For simplicity purposes, this tutorial will explain the method using ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "white on the bottom face"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 301
                        }, this),
                        ", even though at a higher level, solvers should be able to solve with either white or yellow on the bottom."
                    ]
                }, void 0, true, {
                    fileName: "[project]/content/tutorial/223.mdx.tsx",
                    lineNumber: 82,
                    columnNumber: 213
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 192
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 513
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "The first step of the APB method is ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "building a 2x2x3 block on the bottom-left side of the cube"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 82,
                        columnNumber: 636
                    }, this),
                    ". This can be achieved through various ways and it is ultimately up to the solver to decide on which option to choose for a particular scramble. Since this is by far the step with the most freedom, there are a lot of techniques required to consistently achieve a good movecount. Below I will show some of the most useful and consistent methods of creating the 2x2x3."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 581
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "important",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: "Unlike in regular Petrus, the 2x2x3 in APB is always solved on the bottom-left."
                }, void 0, false, {
                    fileName: "[project]/content/tutorial/223.mdx.tsx",
                    lineNumber: 82,
                    columnNumber: 1157
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 1131
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: [
                        "When explaining methods making use of blockbuilding, ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Block Referencing"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 1380
                        }, this),
                        " is very useful to name a certain set of pieces. In block referencing, a combination of layers, for example ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "DF"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 1554
                        }, this),
                        ", refers to those pieces that are in all of those layers, in this case the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "DFL"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 1672
                        }, this),
                        ", ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "DF"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 1718
                        }, this),
                        ", and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "DFR"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 1767
                        }, this),
                        " pieces. This can be done with wide moves and slices as well. ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "dM"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 1873
                        }, this),
                        " would therefore refer to the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "DF"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 1946
                        }, this),
                        " and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "DB"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 1994
                        }, this),
                        " edges and the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "B"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 2052
                        }, this),
                        ", ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "D"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 2096
                        }, this),
                        ", and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                            children: "F"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 2144
                        }, this),
                        " centers.\n",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                            href: "https://sites.google.com/site/athefre/steps-concepts/nbrs",
                            children: "See more on Athefre’s website"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 82,
                            columnNumber: 2197
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/content/tutorial/223.mdx.tsx",
                    lineNumber: 82,
                    columnNumber: 1308
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 1287
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 2358
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/123-223.svg",
                width: 200,
                height: 200,
                alt: "Image of the 2x2x3 being solved using the 1x2x3 to 2x2x3 method"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 2426
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "First creating a ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "Roux-style 1x2x3"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 82,
                        columnNumber: 2607
                    }, this),
                    " block and then adding the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "DF and DB edges"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 82,
                        columnNumber: 2699
                    }, this),
                    " is probably the most consistent way of solving the 2x2x3. On most scrambles, this way of making your 2x2x3 leads to an efficient solution."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 2571
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 2924
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Like with the whole 2x2x3, the 1x2x3 can also be created through various techniques. To figure out new techniques, it is recommended you ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "experiment a little on your own"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 82,
                        columnNumber: 3148
                    }, this),
                    " as well. Below are some possible methods to create the 1x2x3."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 2992
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tabs"], {
                items: [
                    'General Blockbuilding',
                    'Line',
                    'F2L-Style'
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tabs"].Tab, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "general-blockbuilding",
                                style: {
                                    visibility: "hidden",
                                    width: 0,
                                    height: 0
                                },
                                children: "General Blockbuilding"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 82,
                                columnNumber: 3383
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/tutorial/other-blockbuilding-123.svg",
                                width: 120,
                                height: 120,
                                alt: "Image of the 1x2x3 being solved using other blockbuilding"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 86,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: [
                                    "Various blockbuilding techniques can be used to build the 1x2x3. If the scramble, for example, already provides the block at ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                                        children: "Db"
                                    }, void 0, false, {
                                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                                        lineNumber: 86,
                                        columnNumber: 329
                                    }, this),
                                    ", the solver could first solve the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                                        children: "Eb"
                                    }, void 0, false, {
                                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                                        lineNumber: 86,
                                        columnNumber: 407
                                    }, this),
                                    " edge and center in relation to each other and then insert them. Finally, they would create and solve the pair belonging in ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                                        children: "dF"
                                    }, void 0, false, {
                                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                                        lineNumber: 86,
                                        columnNumber: 574
                                    }, this),
                                    ". On many scrambles, such blockbuilding techniques lead to the best solutions."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 86,
                                columnNumber: 185
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h4, {
                                id: toc[3].id,
                                children: toc[3].value
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 86,
                                columnNumber: 711
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                                id: "blockbuilding-viewer",
                                experimentalStickeringMaskOrbits: "EDGES:III-IIIII-I-,CORNERS:II--IIII,CENTERS:I-I-II",
                                "experimental-setup-anchor": "end",
                                "experimental-setup-alg": "x2",
                                alg: "r D' r' U R2 B'",
                                "hint-facelets": "none",
                                "camera-latitude": "-35",
                                "camera-longitude": "-25",
                                "color-scheme": "dark"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 86,
                                columnNumber: 773
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-alg-viewer", {
                                for: "blockbuilding-viewer"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 86,
                                columnNumber: 1070
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 82,
                        columnNumber: 3373
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tabs"].Tab, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "line",
                                style: {
                                    visibility: "hidden",
                                    width: 0,
                                    height: 0
                                },
                                children: "Line"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 86,
                                columnNumber: 1139
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/tutorial/line-123.svg",
                                width: 120,
                                height: 120,
                                alt: "Image of the 1x2x3 being solved using the line method"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 90,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: "A 1x2x3-block can also be created using two 1x1x3 lines. These can be made in any order. If the scramble allows for it or even comes with a pre-built line, this method can lead to very efficient solutions."
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 90,
                                columnNumber: 149
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h4, {
                                id: toc[4].id,
                                children: toc[4].value
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 90,
                                columnNumber: 389
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                                id: "line-viewer",
                                experimentalStickeringMaskOrbits: "EDGES:III-IIIII-I-,CORNERS:II--IIII,CENTERS:I-I-II",
                                "experimental-setup-anchor": "end",
                                "experimental-setup-alg": "x2",
                                alg: "U' R' U' R D2 U R U R' D'",
                                "hint-facelets": "none",
                                "camera-latitude": "-35",
                                "camera-longitude": "-25",
                                "color-scheme": "dark"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 90,
                                columnNumber: 451
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-alg-viewer", {
                                for: "line-viewer"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 90,
                                columnNumber: 749
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 86,
                        columnNumber: 1129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tabs"].Tab, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "f2l-style",
                                style: {
                                    visibility: "hidden",
                                    width: 0,
                                    height: 0
                                },
                                children: "F2L-Style"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 90,
                                columnNumber: 809
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/tutorial/f2l-123.svg",
                                width: 120,
                                height: 120,
                                alt: "Image of the 1x2x3 being solved using an F2L-style method"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 94,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: "It is possible to create the 1x2x3 using an F2L-style approach by first solving the DL edge and then creating and inserting the two left F2L pairs. It can sometimes be a bit hard to find efficient solutions using this method, so you should always be able to solve with other techniques as well."
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 94,
                                columnNumber: 157
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h4, {
                                id: toc[5].id,
                                children: toc[5].value
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 94,
                                columnNumber: 486
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                                id: "f2l-viewer",
                                experimentalStickeringMaskOrbits: "EDGES:III-IIIII-I-,CORNERS:II--IIII,CENTERS:I-I-II",
                                "experimental-setup-anchor": "end",
                                "experimental-setup-alg": "x2",
                                alg: "D' r' R2 F r' U2 r U R2 B'",
                                "hint-facelets": "none",
                                "camera-latitude": "-35",
                                "camera-longitude": "-25",
                                "color-scheme": "dark"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 94,
                                columnNumber: 548
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-alg-viewer", {
                                for: "f2l-viewer"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 94,
                                columnNumber: 846
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 90,
                        columnNumber: 799
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 82,
                columnNumber: 3312
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[6].id,
                children: toc[6].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 908
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "After having created the 1x2x3 block in dL, you can ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "extend it to a 2x2x3"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 1047
                    }, this),
                    " by solving the edges at DF and DB. This can be achieved in two main ways: You can either solve each of them seperately by placing them in the U-layer an then inserting them by doing ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "r U' r'"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 1299
                    }, this),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "r U2 r'"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 1353
                    }, this),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "r' U r"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 1407
                    }, this),
                    ", or ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "r' U2 r"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 1463
                    }, this),
                    " depending on the situation. The other option is creating a line consisting of the two edges and the white center in the U-layer and then inserting it by doing an ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "r2"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 1678
                    }, this),
                    "-move. This method often is more efficient, especially when the edges are oriented (e.g. have their white side on the U-face, front-right, back-right or D-face)."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 976
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h4, {
                id: toc[7].id,
                children: toc[7].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 1908
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                id: "dfdb1-viewer",
                experimentalStickeringMaskOrbits: "EDGES:-I-DIIIIIDID,CORNERS:IIDDIIII,CENTERS:-D----",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2",
                alg: "U r U' r' U r' U r",
                "hint-facelets": "none",
                "camera-latitude": "35",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 1976
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-alg-viewer", {
                for: "dfdb1-viewer"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 2272
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                id: "dfdb2-viewer",
                experimentalStickeringMaskOrbits: "EDGES:-I-DIIIIIDID,CORNERS:IIDDIIII,CENTERS:-D----",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2",
                alg: "R' U' R M' U r2",
                "hint-facelets": "none",
                "camera-latitude": "35",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 2318
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-alg-viewer", {
                for: "dfdb2-viewer"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 2611
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "default",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: "Instead of creating the 1x2x3 in dL and then solving the DF and DB edges, you can also create the 1x2x3 in Dl and then solve the FL and BL edges."
                }, void 0, false, {
                    fileName: "[project]/content/tutorial/223.mdx.tsx",
                    lineNumber: 94,
                    columnNumber: 2681
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 2657
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[8].id,
                children: toc[8].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 2877
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/222-223.svg",
                width: 200,
                height: 200,
                alt: "Image of the 2x2x3 being solved using the 2x2x2 to 2x2x3 method"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 2945
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "An alternative way to solve the 2x2x3 is first creating a 2x2x2 in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "dbl"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 3176
                    }, this),
                    " or ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "dlf"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 3224
                    }, this),
                    " and then extending it by attaching a second 1x1x2 block in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "dlF"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 3328
                    }, this),
                    " or ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "dBl"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 3376
                    }, this),
                    ". This is a very versatile technique too, but it sometimes leads to awkward fingertricks with ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "F2"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 3514
                    }, this),
                    "- or ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "B2"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 3566
                    }, this),
                    "-moves."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 3090
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[9].id,
                children: toc[9].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 3642
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/222-slab.svg",
                width: 120,
                height: 120,
                alt: "Image of the 2x2x2 being solved using the 'slab'-technique"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 3710
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "One way of creating a 2x2x2 block is by creating a 1x2x2 block in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "Dbl"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 3936
                    }, this),
                    " or ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "Dlf"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 3984
                    }, this),
                    ". You can then add an edge with the correct two center pieces, creating a 2x2x2. Of course it is also possible to first create a block in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "Ebl"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 4166
                    }, this),
                    " or ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "Elf"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 4214
                    }, this),
                    " and then adding the other block. As there is a lot of freedom, we recommend you experiment a bit on your own."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 3851
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[10].id,
                children: toc[10].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 4390
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/222-223.svg",
                width: 120,
                height: 120,
                alt: "Image of the 2x2x2 being extended to a 2x2x3"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 4460
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "To then add another 1x2x2, you can again make use of multiple strategies. Often, you would connect one of the two edges to the center and then attach a corner-edge pair using a sequence like ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "R' F R"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 4796
                    }, this),
                    " or ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "L F' L'"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 4851
                    }, this),
                    ". You might even solve the two edges first and then solve the corner using a keyhole-style insert like ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "D R U R' D'"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 5006
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 4586
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[11].id,
                children: toc[11].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 5085
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/cross_2f2l.svg",
                width: 200,
                height: 200,
                alt: "Image of the 2x2x3 being solved using a cross+F2L style method"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 5155
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "error",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: [
                        "Even though you might be tempted to always solve your 2x2x3 like this, this is ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "NOT"
                        }, void 0, false, {
                            fileName: "[project]/content/tutorial/223.mdx.tsx",
                            lineNumber: 94,
                            columnNumber: 5422
                        }, this),
                        " the most efficient method and is only useful on very specific scrambles."
                    ]
                }, void 0, true, {
                    fileName: "[project]/content/tutorial/223.mdx.tsx",
                    lineNumber: 94,
                    columnNumber: 5324
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 5302
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "On some scrambles, solving the 2x2x3 like F2L in CFOP, except without any of the pieces in the R-layer, is the fastest method. Even though the movecount might not be too low, this method does allow for high TPS. Keep in mind this is really only recommended if:"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 5579
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "at least two cross pieces are solved or solvable in one move"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 94,
                                columnNumber: 5918
                            }, this),
                            " and"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 5902
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "at least one of the two edges belonging into FL and BL is oriented"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/223.mdx.tsx",
                                lineNumber: 94,
                                columnNumber: 6070
                            }, this),
                            " (e.g. has its front/back color on the U-face, D-face if it is in those layers or the front/back face if it is in the E-layer)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/223.mdx.tsx",
                        lineNumber: 94,
                        columnNumber: 6054
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/223.mdx.tsx",
                lineNumber: 94,
                columnNumber: 5880
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
function _missingMdxReference(id, component, place) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it." + (place ? "\nIt’s referenced in your code at `" + place + "` in `/mnt/datadrive/apbmethod.net/content/tutorial/223.mdx`" : ""));
}
}),
"[project]/content/tutorial/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    '223': 'Step 1: 2x2x3',
    pair: 'Step 2: BR Pair',
    eo: 'Step 3: Edge Orientation',
    lxs: 'Step 4: Last Extended Slot (LXS)',
    ll: 'Step 5: Last Layer'
};
}),
"[project]/content/tutorial/eo.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/callout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "3. Orienting the Remaining Edges",
    "filePath": "content/tutorial/eo.mdx",
    "timestamp": 1758384366658
};
;
;
const sourceCode = "import { Callout } from 'nextra/components'\nimport Image from 'next/image'\n\n<Image src=\"/images/tutorial/eo.svg\" width={200} height={200} alt=\"Image of a cube with the edges oriented\"/>\n# 3. Orienting the Remaining Edges\nEdge orientation is the third step of APB. In this step, you orient all the unsolved edges to reduce the number of following LXS cases and allow for advanced last layer techniques like ZBLL.\n\n## What is Edge Orientation?\n<Image src=\"/images/tutorial/eo-orbits.svg\" width={175} height={175} alt=\"Image of a cube with the edges oriented\"/>\nEdge orientation is the way an edge is twisted on the cube. **Orienting an edge makes it solvable using only R- and U-moves**. At the same time, this means that the orientation of an edge can not be changed using only R- and U-moves. In the image above, a purple sticker can be moved to the spot of any other purple sticker with only R- and U-moves, but a light gray sticker can never move to a purple sticker and vice versa.\n\n## Recognizing Edge Orientation\nThe orientation of the edges with a white or yellow sticker (so all except the FR edge) can be easily recognized:\n- 👍 If the white/yellow sticker is in any of the purple spots (or at DR), the edge is **good** (oriented).\n- 👎 If the white/yellow sticker is in a gray spot (or at RD), the edge is **bad** (misoriented).\n\nThe orientation of the FR edge can be recognized by checking where the front sticker is.\n- 👍 If the front sticker is in any of the purple spots (or at DR), the edge is **good** (oriented).\n- 👎 If the front sticker is in a gray spot (or at RD), the edge is **bad** (misoriented).\n\n## Solving Edge Orientation\nIn APB, edge orientation is solved algorithmically. There are 11 algorithms, which can be found [here](https://docs.google.com/spreadsheets/d/1Hs9ikHz-4cfbqBfqvuvE8X9sjCb4Jtm482ZvsFQA2rY/) (Note that you only need to learn the algs in the \"dBR Solved EO\" tab. The other algorithms belong to an older style of solving the BR pair and EO at the same time called [EOPair](/variations/eopair)). In the sheet, bad edges are colored light gray.\n\n### Some Example Cases\n<twisty-player\n    experimentalStickeringMaskOrbits=\"EDGES:------------,CORNERS:-I--IIII\"\n    experimental-setup-anchor=\"end\"\n    experimental-setup-alg=\"x2 R U R2 U' R U R\"\n    alg=\"S' U' S\"\n    hint-facelets=\"none\"\n    camera-latitude=\"45\"\n    camera-longitude=\"25\"\n    color-scheme=\"dark\"\n/>\n<twisty-player\n    experimentalStickeringMaskOrbits=\"EDGES:------------,CORNERS:-I--IIII\"\n    experimental-setup-anchor=\"end\"\n    experimental-setup-alg=\"x2 R U R2 U' R U R\"\n    alg=\"F R' F' R U S' U' S\"\n    hint-facelets=\"none\"\n    camera-latitude=\"45\"\n    camera-longitude=\"25\"\n    color-scheme=\"dark\"\n/> \n<twisty-player\n    experimentalStickeringMaskOrbits=\"EDGES:------------,CORNERS:-I--IIII\"\n    experimental-setup-anchor=\"end\"\n    experimental-setup-alg=\"x2 R U R2 U' R U R\"\n    alg=\"S R' U' R U R S'\"\n    hint-facelets=\"none\"\n    camera-latitude=\"45\"\n    camera-longitude=\"25\"\n    color-scheme=\"dark\"\n/> \n\n## Fingertricking S-Moves\n<Callout type=\"info\">\n    S-moves go in the same direction as F-moves.\n</Callout>\nYou might not be used to doing S-moves in the middle of your solve, but they are really not a problem if you practise them. Try to think of them as just F-moves but one layer further back. Unlike F-moves however, you should be able to do push-turns as well. If you still have problems, see the small guide below:\n- **S-moves:** Either use your right index finger to **pull on the UR edge** from the top (do make sure that you **don't** use the very tip of the finger) or use your left index finger and **push on the UL edge** from the left.\n- **S'-moves:** Either use your left index finger to **pull on the UL edge** from the top (do make sure that you **don't** use the very tip of the finger) or use your right index finger and **push on the UR edge** from the right.";
function useTOC(props) {
    return [
        {
            value: "What is Edge Orientation?",
            id: "what-is-edge-orientation",
            depth: 2
        },
        {
            value: "Recognizing Edge Orientation",
            id: "recognizing-edge-orientation",
            depth: 2
        },
        {
            value: "Solving Edge Orientation",
            id: "solving-edge-orientation",
            depth: 2
        },
        {
            value: "Some Example Cases",
            id: "some-example-cases",
            depth: 3
        },
        {
            value: "Fingertricking S-Moves",
            id: "fingertricking-s-moves",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/eo.svg",
                width: 200,
                height: 200,
                alt: "Image of a cube with the edges oriented"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "3. Orienting the Remaining Edges"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 128
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Edge orientation is the third step of APB. In this step, you orient all the unsolved edges to reduce the number of following LXS cases and allow for advanced last layer techniques like ZBLL."
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 203
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 434
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/eo-orbits.svg",
                width: 175,
                height: 175,
                alt: "Image of a cube with the edges oriented"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 502
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Edge orientation is the way an edge is twisted on the cube. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "Orienting an edge makes it solvable using only R- and U-moves"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/eo.mdx.tsx",
                        lineNumber: 49,
                        columnNumber: 704
                    }, this),
                    ". At the same time, this means that the orientation of an edge can not be changed using only R- and U-moves. In the image above, a purple sticker can be moved to the spot of any other purple sticker with only R- and U-moves, but a light gray sticker can never move to a purple sticker and vice versa."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 625
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 1136
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "The orientation of the edges with a white or yellow sticker (so all except the FR edge) can be easily recognized:"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 1204
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "👍 If the white/yellow sticker is in any of the purple spots (or at DR), the edge is ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "good"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 1485
                            }, this),
                            " (oriented)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/eo.mdx.tsx",
                        lineNumber: 49,
                        columnNumber: 1380
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "👎 If the white/yellow sticker is in a gray spot (or at RD), the edge is ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "bad"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 1666
                            }, this),
                            " (misoriented)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/eo.mdx.tsx",
                        lineNumber: 49,
                        columnNumber: 1573
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 1358
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "The orientation of the FR edge can be recognized by checking where the front sticker is."
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 1779
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "👍 If the front sticker is in any of the purple spots (or at DR), the edge is ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "good"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 2028
                            }, this),
                            " (oriented)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/eo.mdx.tsx",
                        lineNumber: 49,
                        columnNumber: 1930
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "👎 If the front sticker is in a gray spot (or at RD), the edge is ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "bad"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 2202
                            }, this),
                            " (misoriented)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/eo.mdx.tsx",
                        lineNumber: 49,
                        columnNumber: 2116
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 1908
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 2315
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "In APB, edge orientation is solved algorithmically. There are 11 algorithms, which can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://docs.google.com/spreadsheets/d/1Hs9ikHz-4cfbqBfqvuvE8X9sjCb4Jtm482ZvsFQA2rY/",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/eo.mdx.tsx",
                        lineNumber: 49,
                        columnNumber: 2498
                    }, this),
                    " (Note that you only need to learn the algs in the “dBR Solved EO” tab. The other algorithms belong to an older style of solving the BR pair and EO at the same time called ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "/variations/eopair",
                        children: "EOPair"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/eo.mdx.tsx",
                        lineNumber: 49,
                        columnNumber: 2805
                    }, this),
                    "). In the sheet, bad edges are colored light gray."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 2383
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[3].id,
                children: toc[3].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 2948
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                experimentalStickeringMaskOrbits: "EDGES:------------,CORNERS:-I--IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2 R U R2 U' R U R",
                alg: "S' U' S",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 3016
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                experimentalStickeringMaskOrbits: "EDGES:------------,CORNERS:-I--IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2 R U R2 U' R U R",
                alg: "F R' F' R U S' U' S",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 3284
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                experimentalStickeringMaskOrbits: "EDGES:------------,CORNERS:-I--IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2 R U R2 U' R U R",
                alg: "S R' U' R U R S'",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 3564
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[4].id,
                children: toc[4].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 3841
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: "S-moves go in the same direction as F-moves."
                }, void 0, false, {
                    fileName: "[project]/content/tutorial/eo.mdx.tsx",
                    lineNumber: 49,
                    columnNumber: 3930
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 3909
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "You might not be used to doing S-moves in the middle of your solve, but they are really not a problem if you practise them. Try to think of them as just F-moves but one layer further back. Unlike F-moves however, you should be able to do push-turns as well. If you still have problems, see the small guide below:"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 4025
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "S-moves:"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 4416
                            }, this),
                            " Either use your right index finger to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "pull on the UR edge"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 4512
                            }, this),
                            " from the top (do make sure that you ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "don’t"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 4617
                            }, this),
                            " use the very tip of the finger) or use your left index finger and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "push on the UL edge"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 4738
                            }, this),
                            " from the left."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/eo.mdx.tsx",
                        lineNumber: 49,
                        columnNumber: 4400
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "S’-moves:"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 4860
                            }, this),
                            " Either use your left index finger to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "pull on the UL edge"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 4956
                            }, this),
                            " from the top (do make sure that you ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "don’t"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 5061
                            }, this),
                            " use the very tip of the finger) or use your right index finger and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "push on the UR edge"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                                lineNumber: 49,
                                columnNumber: 5183
                            }, this),
                            " from the right."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/eo.mdx.tsx",
                        lineNumber: 49,
                        columnNumber: 4844
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/eo.mdx.tsx",
                lineNumber: 49,
                columnNumber: 4378
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/tutorial/ll.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "3. Solving the Last Layer",
    "filePath": "content/tutorial/ll.mdx",
    "timestamp": 1758384360735
};
;
const sourceCode = "import { Steps } from 'nextra/components'\nimport Image from 'next/image'\n\n<Image src=\"/images/apb_icon.svg\" width={250} height={250} alt=\"APB Icon\"/>\n# Welcome to the APB Method Website\nWelcome to **apbmethod.net**! This site is a learning resource for all levels of APB solvers. If you are looking for a tutorial on the method, see [here](/tutorial).\n\n## The APB Method\nAPB is a **3x3 speedsolving method** proposed by **James Straughan aka. Athefre** in 2021. You can check out his overview [here](https://sites.google.com/view/apb-system/overview). Having a movecount of about 48-50 moves and being very algorithm-based, it has **a lot of potential** for being fast at a high level.\n\nStandard APB consists of 5 steps:\n<Steps>\n    {<h3>2x2x3 block on the left side</h3>}\n    Solve a 2x2x3 block in the bottom-left. This is usually accomplished by building a Roux-style 1x2x3 block and then extending it by solving the DF and DB edges.\n\n    {<h3>Solving the back-right F2L-pair</h3>}\n    The back-right F2L pair is solved intuitively.\n\n    {<h3>Solve the edge-orientation of the remaining edges (EO)</h3>}\n    The edge-orientation of the remaining edges is solved algorithmically (11 algorithms).\n\n    {<h3>Solve the last three F2L pieces (LXS)</h3>}\n    The remaining three F2L pieces are solved algorithmically (116 algorithms).\n\n    {<h3>Solve the last layer</h3>}\n    The last layer is solved using either OCLL + PLL or ZBLL, which consists of 493 algorithms.\n</Steps>\n\n## About Me\nHi, this is [JustEnoughAlgorithms](https://www.youtube.com/@justenoughalgorithms) and I'm the creator of this website. I've been using APB since autumn of 2023 and have been using it in competition ever since. I've managed to beat all of my old PBs that I had set with Roux. [My WCA Profile](https://www.worldcubeassociation.org/persons/2022PERR01)\n\n## About this site\nThis website was very much inspired by [zzmethod.com](https://zzmethod.com) made by [crystalcuber](https://www.youtube.com/@crystalcuber). It was created using [nextra](https://nextra.site).\n\n## Contribute\nIf you have an idea or want to contribute, create an issue on this book's [GitHub Page](https://github.com/phalentin/apbmethod.net) or create a pull request.";
function useTOC(props) {
    return [
        {
            value: "OCLL + PLL",
            id: "ocll--pll",
            depth: 2
        },
        {
            value: "1. OCLL",
            id: "1-ocll",
            depth: 3
        },
        {
            value: "2. PLL",
            id: "2-pll",
            depth: 3
        },
        {
            value: "ZBLL",
            id: "zbll",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        em: "em",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        p: "p",
        strong: "strong",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/ll.svg",
                width: 200,
                height: 200,
                alt: "Image of a cube with the last layer solved"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "3. Solving the Last Layer"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 131
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "The final step of APB is the last layer. Solvers can use two main strategies here:"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 199
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 322
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "First solving ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "OCLL and then PLL"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/ll.mdx.tsx",
                        lineNumber: 44,
                        columnNumber: 423
                    }, this),
                    " is definitely the easiest option. It requires 28 algorithms, although most CFOP solvers will already have learned these."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 390
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 632
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "OCLL are the OLL algorithms where the cross is already solved. They solve the orientation of the U-layer corners. They can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://speedcubedb.com/a/3x3/OLL",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/ll.mdx.tsx",
                        lineNumber: 44,
                        columnNumber: 851
                    }, this),
                    " (Make sure you select ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.em, {
                        children: "OCLL"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/ll.mdx.tsx",
                        lineNumber: 44,
                        columnNumber: 958
                    }, this),
                    " at the top)."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 700
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 1038
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "PLL permutes the last layer pieces. The algorithms can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://speedcubedb.com/a/3x3/PLL",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/ll.mdx.tsx",
                        lineNumber: 44,
                        columnNumber: 1189
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 1106
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[3].id,
                children: toc[3].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 1296
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "At a higher level, ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "ZBLL"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/ll.mdx.tsx",
                        lineNumber: 44,
                        columnNumber: 1402
                    }, this),
                    " can be used to solve the last layer in one step. Further information on ZBLL can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "/advanced/zbll",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/ll.mdx.tsx",
                        lineNumber: 44,
                        columnNumber: 1546
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/ll.mdx.tsx",
                lineNumber: 44,
                columnNumber: 1364
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/tutorial/lxs.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/callout.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/components/steps.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "4. Solving the Last Extended Slot (LXS)",
    "filePath": "content/tutorial/lxs.mdx",
    "timestamp": 1758384360735
};
;
;
const sourceCode = "import { Steps } from 'nextra/components'\nimport Image from 'next/image'\n\n<Image src=\"/images/apb_icon.svg\" width={250} height={250} alt=\"APB Icon\"/>\n# Welcome to the APB Method Website\nWelcome to **apbmethod.net**! This site is a learning resource for all levels of APB solvers. If you are looking for a tutorial on the method, see [here](/tutorial).\n\n## The APB Method\nAPB is a **3x3 speedsolving method** proposed by **James Straughan aka. Athefre** in 2021. You can check out his overview [here](https://sites.google.com/view/apb-system/overview). Having a movecount of about 48-50 moves and being very algorithm-based, it has **a lot of potential** for being fast at a high level.\n\nStandard APB consists of 5 steps:\n<Steps>\n    {<h3>2x2x3 block on the left side</h3>}\n    Solve a 2x2x3 block in the bottom-left. This is usually accomplished by building a Roux-style 1x2x3 block and then extending it by solving the DF and DB edges.\n\n    {<h3>Solving the back-right F2L-pair</h3>}\n    The back-right F2L pair is solved intuitively.\n\n    {<h3>Solve the edge-orientation of the remaining edges (EO)</h3>}\n    The edge-orientation of the remaining edges is solved algorithmically (11 algorithms).\n\n    {<h3>Solve the last three F2L pieces (LXS)</h3>}\n    The remaining three F2L pieces are solved algorithmically (116 algorithms).\n\n    {<h3>Solve the last layer</h3>}\n    The last layer is solved using either OCLL + PLL or ZBLL, which consists of 493 algorithms.\n</Steps>\n\n## About Me\nHi, this is [JustEnoughAlgorithms](https://www.youtube.com/@justenoughalgorithms) and I'm the creator of this website. I've been using APB since autumn of 2023 and have been using it in competition ever since. I've managed to beat all of my old PBs that I had set with Roux. [My WCA Profile](https://www.worldcubeassociation.org/persons/2022PERR01)\n\n## About this site\nThis website was very much inspired by [zzmethod.com](https://zzmethod.com) made by [crystalcuber](https://www.youtube.com/@crystalcuber). It was created using [nextra](https://nextra.site).\n\n## Contribute\nIf you have an idea or want to contribute, create an issue on this book's [GitHub Page](https://github.com/phalentin/apbmethod.net) or create a pull request.";
function useTOC(props) {
    return [
        {
            value: "Algorithms",
            id: "algorithms",
            depth: 2
        },
        {
            value: "Some Example Cases",
            id: "some-example-cases",
            depth: 3
        },
        {
            value: "Beginner Approaches",
            id: "beginner-approaches",
            depth: 2
        },
        {
            value: "Solving the F2L Pair and then the DR Edge",
            id: "solving-the-f2l-pair-and-then-the-dr-edge",
            depth: 3
        },
        {
            value: "Inserting the Corner and then doing LXS",
            id: "inserting-the-corner-and-then-doing-lxs",
            depth: 3
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        code: "code",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        p: "p",
        strong: "strong",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/lxs.svg",
                width: 200,
                height: 200,
                alt: "Image of a cube with LXS solved"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "4. Solving the Last Extended Slot (LXS)"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 121
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "The last extended slot or LXS is probably the best step of the APB method. In this step, the solvers ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "solves the three remaining pieces in the d-layer"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 48,
                        columnNumber: 323
                    }, this),
                    ". This is done algorithmically and consists of ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "116 cases"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 48,
                        columnNumber: 467
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 203
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 548
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "The LXS-algorithms can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://docs.google.com/spreadsheets/d/1P2DB0SyA1BrezYJ_g7RJ7_l32Ilxq7lLtr53zlG_TUU/",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 48,
                        columnNumber: 667
                    }, this),
                    ". Liam Highducheck has created a sheet which categorizes all the cases into seven categories for easier learning. It can be found ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://docs.google.com/spreadsheets/d/1ACKQXpMK0b8RWGoN9wMDbnF-W-S4mMdeJH5IcjeEyf8/",
                        children: "here"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 48,
                        columnNumber: 932
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 616
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 1090
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                experimentalStickeringMaskOrbits: "EDGES:----IIII----,CORNERS:----IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2",
                alg: "R U2' R' U2 R' U2' R2 U2' R",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 1158
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                experimentalStickeringMaskOrbits: "EDGES:----IIII----,CORNERS:----IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2",
                alg: "R' U' R' U' R U2 R",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 1430
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                experimentalStickeringMaskOrbits: "EDGES:----IIII----,CORNERS:----IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2",
                alg: "R U R' U' R U' R' U R' U' R U R",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 1693
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "default",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: "At a higher level, solvers can also learn dBL LXS and EO, which enables them to solve the FR pair and then do EO and LXS for the back slot. Usually, this is not worth it though."
                }, void 0, false, {
                    fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                    lineNumber: 48,
                    columnNumber: 1993
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 1969
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 2221
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "There are two main beginner approaches to solve LXS without or with fewer algorithms:"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 2289
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[3].id,
                children: toc[3].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 2415
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "If you haven’t learned any of the algorithms yet, you can follow the following approach:"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 2483
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve the dFR Pair"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 48,
                        columnNumber: 2620
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Solve the dFR pair like an F2L pair"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                                lineNumber: 48,
                                columnNumber: 2663
                            }, this),
                            " while ignoring the edge belonging into DR. If the F2L edge is at DR, you have to take it out using ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "S R2' S' R2"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                                lineNumber: 48,
                                columnNumber: 2847
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 48,
                        columnNumber: 2648
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve the DR Edge"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 48,
                        columnNumber: 2921
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Solve the DR edge"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                                lineNumber: 48,
                                columnNumber: 2963
                            }, this),
                            " by putting it at UL and then doing ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "S R2' S' R2"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                                lineNumber: 48,
                                columnNumber: 3065
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 48,
                        columnNumber: 2948
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 2612
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Below is an example solution using this approach:"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 3152
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                id: "lxs-beginner1",
                experimentalStickeringMaskOrbits: "EDGES:----IIII----,CORNERS:----IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2",
                alg: " S R2' S' R2 R U2' R' U R U' R' U2 S R2' S' R2 ",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 48,
                columnNumber: 3242
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: toc[4].id,
                children: toc[4].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 50,
                columnNumber: 95
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "If you have learned all the LXS cases with the corner in the D-layer, this approach allows you to do LXS in two steps:"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 50,
                columnNumber: 163
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Insert the Corner into DFR"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 50,
                        columnNumber: 330
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Insert the corner"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                                lineNumber: 50,
                                columnNumber: 381
                            }, this),
                            " belonging into DFR. If you know all the LXS cases with the corner in the D-layer, the orientation doesn’t matter. If you haven’t learned all three sets, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "the orientation has to match up"
                            }, void 0, false, {
                                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                                lineNumber: 50,
                                columnNumber: 601
                            }, this),
                            " with one of the sets you learned."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 50,
                        columnNumber: 366
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Solve the LXS case"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 50,
                        columnNumber: 732
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "Do the alg for the LXS case you have now."
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                        lineNumber: 50,
                        columnNumber: 760
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 50,
                columnNumber: 322
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Below is an example solution using this approach:"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 50,
                columnNumber: 850
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                id: "lxs-beginner1",
                experimentalStickeringMaskOrbits: "EDGES:----IIII----,CORNERS:----IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2",
                alg: " U' R U R' U2 R U' R' U R' U2' R U2 R ",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/lxs.mdx.tsx",
                lineNumber: 50,
                columnNumber: 940
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/tutorial/pair.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "2. Solving the BR Pair",
    "filePath": "content/tutorial/pair.mdx",
    "timestamp": 1758384363254
};
;
const sourceCode = "import Image from 'next/image'\n\n<Image src=\"/images/tutorial/pair.svg\" width={200} height={200} alt=\"Image of a cube with the BR pair solved\"/>\n# 2. Solving the BR Pair\n**Solving the dBR pair** is the second step of APB. This is probably the most trivial step, as it can be completed **intuitively** and CFOP-solvers will already be familiar with it.\n\n## Oriented BR Edge\nIf the BR edge is oriented (e.g. its back color is on top, bottom or at the front right), the standard CFOP solution will be the fastest most of the time. It is, however, often possible not to undo R-moves (see example).\n<twisty-player\n    experimentalStickeringMaskOrbits=\"EDGES:-I--IIII--I-,CORNERS:-I--IIII\"\n    experimental-setup-anchor=\"end\"\n    experimental-setup-alg=\"x2\"\n    alg=\"R U' R\"\n    hint-facelets=\"none\"\n    camera-latitude=\"45\"\n    camera-longitude=\"25\"\n    color-scheme=\"dark\"\n/>\n\n## Misoriented BR Edge\nWhen the BR edge is misoriented (e.g. its right color is on top, bottom, at the front right or back right), there are often **fast solutions using S-moves** (see example). If there is no fancy S-move solution, you can connect the two pieces and then insert them by doing `f R' f'`.\n<twisty-player\n    experimentalStickeringMaskOrbits=\"EDGES:-I--IIII--I-,CORNERS:-I--IIII\"\n    experimental-setup-anchor=\"end\"\n    experimental-setup-alg=\"x2\"\n    alg=\"S R' S'\"\n    hint-facelets=\"none\"\n    camera-latitude=\"45\"\n    camera-longitude=\"25\"\n    color-scheme=\"dark\"\n/>\n\n## Algorithm Sheet\n**For some cases**, especially those with a misoriented edge, **learning the most efficient solution is really helpful**. Those solutions can be found in [Liam Highducheck's sheet](https://docs.google.com/spreadsheets/d/1U1nwq_-HLeDgajuAOVRaH2Jo7X9zSTEBrnIRSv3hzeg/edit?gid=983211243#gid=983211243).";
function useTOC(props) {
    return [
        {
            value: "Oriented BR Edge",
            id: "oriented-br-edge",
            depth: 2
        },
        {
            value: "Misoriented BR Edge",
            id: "misoriented-br-edge",
            depth: 2
        },
        {
            value: "Algorithm Sheet",
            id: "algorithm-sheet",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        code: "code",
        h1: "h1",
        h2: "h2",
        p: "p",
        strong: "strong",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/tutorial/pair.svg",
                width: 200,
                height: 200,
                alt: "Image of a cube with the BR pair solved"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "2. Solving the BR Pair"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 130
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "Solving the dBR pair"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/pair.mdx.tsx",
                        lineNumber: 38,
                        columnNumber: 210
                    }, this),
                    " is the second step of APB. This is probably the most trivial step, as it can be completed ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "intuitively"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/pair.mdx.tsx",
                        lineNumber: 38,
                        columnNumber: 370
                    }, this),
                    " and CFOP-solvers will already be familiar with it."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 195
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 503
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "If the BR edge is oriented (e.g. its back color is on top, bottom or at the front right), the standard CFOP solution will be the fastest most of the time. It is, however, often possible not to undo R-moves (see example)."
            }, void 0, false, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 571
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                experimentalStickeringMaskOrbits: "EDGES:-I--IIII--I-,CORNERS:-I--IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2",
                alg: "R U' R",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 832
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[1].id,
                children: toc[1].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 1083
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "When the BR edge is misoriented (e.g. its right color is on top, bottom, at the front right or back right), there are often ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "fast solutions using S-moves"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/pair.mdx.tsx",
                        lineNumber: 38,
                        columnNumber: 1294
                    }, this),
                    " (see example). If there is no fancy S-move solution, you can connect the two pieces and then insert them by doing ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "f R' f'"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/pair.mdx.tsx",
                        lineNumber: 38,
                        columnNumber: 1486
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 1151
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("twisty-player", {
                experimentalStickeringMaskOrbits: "EDGES:-I--IIII--I-,CORNERS:-I--IIII",
                "experimental-setup-anchor": "end",
                "experimental-setup-alg": "x2",
                alg: "S R' S'",
                "hint-facelets": "none",
                "camera-latitude": "45",
                "camera-longitude": "25",
                "color-scheme": "dark"
            }, void 0, false, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 1561
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[2].id,
                children: toc[2].value
            }, void 0, false, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 1813
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "For some cases"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/pair.mdx.tsx",
                        lineNumber: 38,
                        columnNumber: 1896
                    }, this),
                    ", especially those with a misoriented edge, ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                        children: "learning the most efficient solution is really helpful"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/pair.mdx.tsx",
                        lineNumber: 38,
                        columnNumber: 2003
                    }, this),
                    ". Those solutions can be found in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://docs.google.com/spreadsheets/d/1U1nwq_-HLeDgajuAOVRaH2Jo7X9zSTEBrnIRSv3hzeg/edit?gid=983211243#gid=983211243",
                        children: "Liam Highducheck’s sheet"
                    }, void 0, false, {
                        fileName: "[project]/content/tutorial/pair.mdx.tsx",
                        lineNumber: 38,
                        columnNumber: 2140
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/tutorial/pair.mdx.tsx",
                lineNumber: 38,
                columnNumber: 1881
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/variations/_meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    eopair: 'EOPair',
    'back-lxs-eo': 'Back Slot LXS & EO'
};
}),
"[project]/content/variations/back-lxs-eo.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "Back Slot LXS & Edge Orientation",
    "filePath": "content/variations/back-lxs-eo.mdx",
    "timestamp": 1758384362357
};
;
const sourceCode = "import Image from 'next/image'\n\n<Image src=\"/images/variations/back-lxs-eo.svg\" width={200} height={200} alt=\"Image of a cube with the last layer solved\" lnk=\"?fmt=svg&r=y35x-25&bg=t&&fc=dlglygdlddrrrrrrlddldbbbbbb\"/>\n# Back Slot LXS & Edge Orientation\nInstead of solving the BR pair and then doing LXS and EO on the dfR pieces, you can solve the FR pair and then do LXS and EO on the dbR pieces. This has the obvious disatvantages of having to learn 127 new EO and LXS algorithms and more blind spots. It can still be worth it on some scrambles that have a very easy or solved FR pair after completing the 2x2x3. \n\n## Algorithms\n- [Back Slot LXS](https://docs.google.com/spreadsheets/d/1Xa6251D9G00g-jMQy0KzUg7xx39rsSjkJLMzsxinC7Q/)\n- [Back Slot EO](https://docs.google.com/spreadsheets/d/1Hs9ikHz-4cfbqBfqvuvE8X9sjCb4Jtm482ZvsFQA2rY/edit?gid=321284838)";
function useTOC(props) {
    return [
        {
            value: "Algorithms",
            id: "algorithms",
            depth: 2
        }
    ];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h1: "h1",
        h2: "h2",
        li: "li",
        p: "p",
        ul: "ul",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/variations/back-lxs-eo.svg",
                width: 200,
                height: 200,
                alt: "Image of a cube with the last layer solved",
                lnk: "?fmt=svg&r=y35x-25&bg=t&&fc=dlglygdlddrrrrrrlddldbbbbbb"
            }, void 0, false, {
                fileName: "[project]/content/variations/back-lxs-eo.mdx.tsx",
                lineNumber: 30,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "Back Slot LXS & Edge Orientation"
            }, void 0, false, {
                fileName: "[project]/content/variations/back-lxs-eo.mdx.tsx",
                lineNumber: 30,
                columnNumber: 216
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Instead of solving the BR pair and then doing LXS and EO on the dfR pieces, you can solve the FR pair and then do LXS and EO on the dbR pieces. This has the obvious disatvantages of having to learn 127 new EO and LXS algorithms and more blind spots. It can still be worth it on some scrambles that have a very easy or solved FR pair after completing the 2x2x3."
            }, void 0, false, {
                fileName: "[project]/content/variations/back-lxs-eo.mdx.tsx",
                lineNumber: 30,
                columnNumber: 291
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: toc[0].id,
                children: toc[0].value
            }, void 0, false, {
                fileName: "[project]/content/variations/back-lxs-eo.mdx.tsx",
                lineNumber: 30,
                columnNumber: 692
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                            href: "https://docs.google.com/spreadsheets/d/1Xa6251D9G00g-jMQy0KzUg7xx39rsSjkJLMzsxinC7Q/",
                            children: "Back Slot LXS"
                        }, void 0, false, {
                            fileName: "[project]/content/variations/back-lxs-eo.mdx.tsx",
                            lineNumber: 30,
                            columnNumber: 798
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/variations/back-lxs-eo.mdx.tsx",
                        lineNumber: 30,
                        columnNumber: 782
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                            href: "https://docs.google.com/spreadsheets/d/1Hs9ikHz-4cfbqBfqvuvE8X9sjCb4Jtm482ZvsFQA2rY/edit?gid=321284838",
                            children: "Back Slot EO"
                        }, void 0, false, {
                            fileName: "[project]/content/variations/back-lxs-eo.mdx.tsx",
                            lineNumber: 30,
                            columnNumber: 977
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/variations/back-lxs-eo.mdx.tsx",
                        lineNumber: 30,
                        columnNumber: 961
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/variations/back-lxs-eo.mdx.tsx",
                lineNumber: 30,
                columnNumber: 760
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/content/variations/eopair.mdx.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata,
    "sourceCode",
    ()=>sourceCode,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    "title": "EOPair: Inserting the Pair and Solving EO at the Same Time",
    "filePath": "content/variations/eopair.mdx",
    "timestamp": 1758384364081
};
;
const sourceCode = "import Image from 'next/image'\n\n<Image src=\"/images/variations/eopair.svg\" width={200} height={200} alt=\"Image of a cube with an EOPair case\" lnk=\"https://visualcube.api.cubing.net/visualcube.php?fmt=svg&r=y35x-25&bg=t&fc=dldlyrddrggddrldddddwbbdbbd\"/>\n# EOPair: Inserting the Pair and Solving EO at the Same Time\nEOPair is an algirithm set for inserting the back-right pair while orienting the edges at the same time. It is divided into four subsets, two with the pair in the U-layer, two with the pair in the R-layer. For both of these positions, there are algorithms for an oriented and a misoriented pair. EOPair used to be part of standard APB. At some point, solvers realized that it only saved about 0.3 moves on average while it consists of 128 algorithms. This trade-off is not worth it in most cases. It is rather recommended to learn the most efficient solutions for all the possible pair cases. If you still want to learn EOPair, it is recommended you start with the misoriented U subset.\n\nThe algorithms can be found in the [regular EO algorithm sheet](https://docs.google.com/spreadsheets/d/1Hs9ikHz-4cfbqBfqvuvE8X9sjCb4Jtm482ZvsFQA2rY/edit?gid=1684874333).";
function useTOC(props) {
    return [];
}
const toc = useTOC({});
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h1: "h1",
        p: "p",
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])(),
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/variations/eopair.svg",
                width: 200,
                height: 200,
                alt: "Image of a cube with an EOPair case",
                lnk: "https://visualcube.api.cubing.net/visualcube.php?fmt=svg&r=y35x-25&bg=t&fc=dldlyrddrggddrldddddwbbdbbd"
            }, void 0, false, {
                fileName: "[project]/content/variations/eopair.mdx.tsx",
                lineNumber: 23,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h1, {
                children: "EOPair: Inserting the Pair and Solving EO at the Same Time"
            }, void 0, false, {
                fileName: "[project]/content/variations/eopair.mdx.tsx",
                lineNumber: 23,
                columnNumber: 251
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "EOPair is an algirithm set for inserting the back-right pair while orienting the edges at the same time. It is divided into four subsets, two with the pair in the U-layer, two with the pair in the R-layer. For both of these positions, there are algorithms for an oriented and a misoriented pair. EOPair used to be part of standard APB. At some point, solvers realized that it only saved about 0.3 moves on average while it consists of 128 algorithms. This trade-off is not worth it in most cases. It is rather recommended to learn the most efficient solutions for all the possible pair cases. If you still want to learn EOPair, it is recommended you start with the misoriented U subset."
            }, void 0, false, {
                fileName: "[project]/content/variations/eopair.mdx.tsx",
                lineNumber: 23,
                columnNumber: 352
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "The algorithms can be found in the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://docs.google.com/spreadsheets/d/1Hs9ikHz-4cfbqBfqvuvE8X9sjCb4Jtm482ZvsFQA2rY/edit?gid=1684874333",
                        children: "regular EO algorithm sheet"
                    }, void 0, false, {
                        fileName: "[project]/content/variations/eopair.mdx.tsx",
                        lineNumber: 23,
                        columnNumber: 1133
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/variations/eopair.mdx.tsx",
                lineNumber: 23,
                columnNumber: 1079
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = _createMdxContent;
}),
"[project]/app/[[...mdxPath]]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nextra/dist/client/pages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mdx-components.js [app-rsc] (ecmascript)");
;
;
;
const generateStaticParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateStaticParamsFor"])('mdxPath');
async function generateMetadata(props) {
    const params = await props.params;
    const { metadata } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importPage"])(params.mdxPath);
    return metadata;
}
const Wrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mdx$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useMDXComponents"])().wrapper;
async function Page(props) {
    const params = await props.params;
    const { default: MDXContent, toc, metadata, sourceCode } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextra$2f$dist$2f$client$2f$pages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["importPage"])(params.mdxPath);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        toc: toc,
        metadata: metadata,
        sourceCode: sourceCode,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MDXContent, {
            ...props,
            params: params
        }, void 0, false, {
            fileName: "[project]/app/[[...mdxPath]]/page.jsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/[[...mdxPath]]/page.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[[...mdxPath]]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[[...mdxPath]]/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__38749c90._.js.map