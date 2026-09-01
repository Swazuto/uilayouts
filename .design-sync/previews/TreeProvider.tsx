import {
  TreeExpander,
  TreeIcon,
  TreeLabel,
  TreeNode,
  TreeNodeContent,
  TreeNodeTrigger,
  TreeProvider,
  TreeView,
} from '../../packages/ui/src/tree';

export function Default() {
  return (
    <div style={{ maxWidth: 320 }}>
      <TreeProvider defaultExpandedIds={['src', 'components']}>
        <TreeView>
          <TreeNode nodeId="src" level={0} isFolder>
            <TreeNodeTrigger>
              <TreeExpander hasChildren />
              <TreeIcon hasChildren />
              <TreeLabel>src</TreeLabel>
            </TreeNodeTrigger>
            <TreeNodeContent hasChildren>
              <TreeNode nodeId="components" level={1} isFolder parentPath={[false]}>
                <TreeNodeTrigger>
                  <TreeExpander hasChildren />
                  <TreeIcon hasChildren />
                  <TreeLabel>components</TreeLabel>
                </TreeNodeTrigger>
                <TreeNodeContent hasChildren>
                  <TreeNode nodeId="button.tsx" level={2} parentPath={[false, false]}>
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>button.tsx</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                  <TreeNode
                    nodeId="card.tsx"
                    level={2}
                    isLast
                    parentPath={[false, false]}
                  >
                    <TreeNodeTrigger>
                      <TreeExpander />
                      <TreeIcon />
                      <TreeLabel>card.tsx</TreeLabel>
                    </TreeNodeTrigger>
                  </TreeNode>
                </TreeNodeContent>
              </TreeNode>
              <TreeNode nodeId="index.ts" level={1} isLast parentPath={[false]}>
                <TreeNodeTrigger>
                  <TreeExpander />
                  <TreeIcon />
                  <TreeLabel>index.ts</TreeLabel>
                </TreeNodeTrigger>
              </TreeNode>
            </TreeNodeContent>
          </TreeNode>
          <TreeNode nodeId="package.json" level={0} isLast>
            <TreeNodeTrigger>
              <TreeExpander />
              <TreeIcon />
              <TreeLabel>package.json</TreeLabel>
            </TreeNodeTrigger>
          </TreeNode>
        </TreeView>
      </TreeProvider>
    </div>
  );
}
