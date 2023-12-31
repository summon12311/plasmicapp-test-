// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3hEa8Tzds7EYLpSCSUYJgh
// Component: bGWyspaInf
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import PageLayout from "../../PageLayout"; // plasmic-import: ZgXOurN-L6q/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponent
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponentHelper
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_tutorial_app_in_5_minutes.module.css"; // plasmic-import: 3hEa8Tzds7EYLpSCSUYJgh/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: bGWyspaInf/css

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec(
          "selectedRowKeys",
          RichTable_Helpers
        )
      }
    ],

    [$props, $ctx, $refs]
  );

  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries,
    $refs
  });
  const new$Queries = {
    customers: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "r5bSuGW5A5oAyszkqcR74w",
            opId: "ddecf996-56cc-433b-be90-21f1df4e5d59",
            userArgs: {},
            cacheKey: "plasmic.$.-KNVFe1bc.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <ph.DataCtxReader>
              {$ctx =>
                (() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.table),
                    data: (() => {
                      try {
                        return $queries.customers;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })(),
                    onRowSelectionChanged: async (...eventArgs) => {
                      p.generateStateOnChangePropForCodeComponents(
                        $state,
                        "selectedRowKey",
                        ["table", "selectedRowKey"],
                        RichTable_Helpers
                      ).apply(null, eventArgs);
                      p.generateStateOnChangePropForCodeComponents(
                        $state,
                        "selectedRow",
                        ["table", "selectedRow"],
                        RichTable_Helpers
                      ).apply(null, eventArgs);
                      p.generateStateOnChangePropForCodeComponents(
                        $state,
                        "selectedRows",
                        ["table", "selectedRows"],
                        RichTable_Helpers
                      ).apply(null, eventArgs);
                      p.generateStateOnChangePropForCodeComponents(
                        $state,
                        "selectedRowKeys",
                        ["table", "selectedRowKeys"],
                        RichTable_Helpers
                      ).apply(null, eventArgs);
                    },
                    scopeClassName: sty["table__instance"],
                    selectedRowKey: p.generateStateValueProp($state, [
                      "table",
                      "selectedRowKey"
                    ]),

                    selectedRowKeys: p.generateStateValueProp($state, [
                      "table",
                      "selectedRowKeys"
                    ]),

                    themeResetClassName: classNames(
                      projectcss.root_reset,
                      projectcss.root_reset_tags,
                      projectcss.plasmic_default_styles,
                      projectcss.plasmic_mixins,
                      projectcss.plasmic_tokens,
                      plasmic_antd_5_hostless_css.plasmic_tokens,
                      plasmic_plasmic_rich_components_css.plasmic_tokens
                    )
                  };
                  p.initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "selectedRowKey",
                        plasmicStateName: "table.selectedRowKey"
                      },
                      {
                        name: "selectedRow",
                        plasmicStateName: "table.selectedRow"
                      },
                      {
                        name: "selectedRows",
                        plasmicStateName: "table.selectedRows"
                      },
                      {
                        name: "selectedRowKeys",
                        plasmicStateName: "table.selectedRowKeys"
                      }
                    ],

                    [],
                    RichTable_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <RichTable
                      data-plasmic-name={"table"}
                      data-plasmic-override={overrides.table}
                      {...child$Props}
                    />
                  );
                })()
              }
            </ph.DataCtxReader>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "table"],
  pageLayout: ["pageLayout", "table"],
  table: ["table"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    table: makeNodeComponent("table"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
