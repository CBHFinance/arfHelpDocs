// import CMS from 'decap-cms-app'

// CMS.init({
//     config: {
//       backend: {
//         name: 'github',
//         branch: 'main',
//         repo: 'CBHFinance/arfHelpDocs'
//       },
//       load_config_file: false,
//       media_folder: "static/img",
//       public_folder: "/img/",
//       slug: {
//         encoding: 'ascii',
//         clean_accents: true,
//         sanitize_replacement: '_'
//       },
//       collections: [
//         { label: "Blog", name: "blog", folder: "docs", create: true, fields: [
//           { label: "Title", name: "title", widget: "string" },
//           { label: "Publish Date", name: "date", widget: "datetime" },
//           { label: "Featured Image", name: "thumbnail", widget: "image" },
//           { label: "Body", name: "body", widget: "markdown" },
//         ]},
//       ],
//     },
//   })