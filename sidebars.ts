import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
// const sidebars: SidebarsConfig = {
//   // By default, Docusaurus generates a sidebar from the docs folder structure
//   userGuideSidebar: [{type: 'autogenerated', dirName: '.'}],
//   adminUserGuideSidebar: [{type: 'autogenerated', dirName: './adminGuide'}]
//   // But you can create a sidebar manually
//   /*
//   tutorialSidebar: [
//     'intro',
//     'hello',
//     {
//       type: 'category',
//       label: 'Tutorial',
//       items: ['tutorial-basics/create-a-document'],
//     },
//   ],
//    */
// };

// export default sidebars;

module.exports = {

  docs: [
    'Overview',
    {
      type: 'category',
      label: 'User Guide',
      link: {
        type: 'generated-index'
      },
      collapsed: false,
      items: [
        'requests/entry',
        'requests/tracking',
      ]
    },
    {
      type: 'category',
      label: 'Administration Guide',
      link: {
        type: 'generated-index'
      },
      collapsed: true,
      items: [
        'admin/users',
        'admin/approvers',
        'admin/approvals',
      ]
    }
  ]
}
