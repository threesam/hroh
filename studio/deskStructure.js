import S from '@sanity/desk-tool/structure-builder'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'laurel', 'press', 'praise', 'cast', 'crew', 'patrons', 'resources', 'specialThanks', 'screening'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
      .child(
        S.editor()
        .id('siteSettings')
        .schemaType('siteSettings')
        .documentId('siteSettings')
        ),
        S.listItem()
        .title('Screening')
          .schemaType('screening')
        .child(S.documentTypeList('screening').title('Screening')),
      S.listItem()
          .title('Blog posts')
        .schemaType('post')
          .child(S.documentTypeList('post').title('Blog posts')),
        S.listItem()
          .title('Authors')
          .schemaType('author')
          .child(S.documentTypeList('author').title('Authors')),
          S.listItem()
            .title('Cast')
        .schemaType('cast')
        .child(S.documentTypeList('cast').title('Cast')),
      S.listItem()
        .title('Crew')
        .schemaType('crew')
        .child(S.documentTypeList('crew').title('Crew')),
      S.listItem()
        .title('Patrons')
        .schemaType('patrons')
        .child(S.documentTypeList('patrons').title('Patrons')),
      S.listItem()
        .title('Laurels')
        .schemaType('laurel')
        .child(S.documentTypeList('laurel').title('Laurels')),
      S.listItem()
        .title('Press')
        .schemaType('press')
        .child(S.documentTypeList('press').title('Press')),
      S.listItem()
        .title('Praise')
        .schemaType('praise')
        .child(S.documentTypeList('praise').title('Praise')),
      S.listItem()
        .title('Special Thanks')
        .schemaType('specialThanks')
        .child(S.documentTypeList('specialThanks').title('Special Thanks')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Resources')
        .schemaType('resources')
        .child(S.documentTypeList('resources').title('Resources')),
        // This returns an array of all the document types
        // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
    