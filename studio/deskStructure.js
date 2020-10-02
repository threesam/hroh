import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import MdBeach from 'react-icons/lib/md/beach-access'
import MdStar from 'react-icons/lib/md/star'
import MdPress from 'react-icons/lib/md/free-breakfast'
import MdPraise from 'react-icons/lib/md/favorite'
import MdPatron from 'react-icons/lib/md/attach-money'
import MdLaurel from 'react-icons/lib/md/radio'
import MdCategories from 'react-icons/lib/md/loupe'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'laurel', 'press', 'praise', 'cast', 'crew', 'patrons', 'resources', 'specialThanks'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
      .title('Settings')
      .icon(MdSettings)
      .child(
        S.editor()
        .id('siteSettings')
        .schemaType('siteSettings')
        .documentId('siteSettings')
        ),
        S.listItem()
          .title('Blog posts')
          .schemaType('post')
          .icon(MdBeach)
          .child(S.documentTypeList('post').title('Blog posts')),
        S.listItem()
          .title('Authors')
          .icon(MdPerson)
          .schemaType('author')
          .child(S.documentTypeList('author').title('Authors')),
          S.listItem()
        .title('Cast')
        .icon(MdPerson)
        .schemaType('cast')
        .child(S.documentTypeList('cast').title('Cast')),
      S.listItem()
        .title('Crew')
        .icon(MdPerson)
        .schemaType('crew')
        .child(S.documentTypeList('crew').title('Crew')),
      S.listItem()
        .title('Patrons')
        .icon(MdPatron)
        .schemaType('patrons')
        .child(S.documentTypeList('patrons').title('Patrons')),
      S.listItem()
        .title('Laurels')
        .icon(MdLaurel)
        .schemaType('laurel')
        .child(S.documentTypeList('laurel').title('Laurels')),
      S.listItem()
        .title('Press')
        .icon(MdPress)
        .schemaType('press')
        .child(S.documentTypeList('press').title('Press')),
      S.listItem()
        .title('Praise')
        .icon(MdPraise)
        .schemaType('praise')
        .child(S.documentTypeList('praise').title('Praise')),
      S.listItem()
        .title('Special Thanks')
        .icon(MdPraise)
        .schemaType('specialThanks')
        .child(S.documentTypeList('specialThanks').title('Special Thanks')),
      S.listItem()
        .title('Categories')
        .icon(MdCategories)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Resources')
        .icon(MdStar)
        .schemaType('resources')
        .child(S.documentTypeList('resources').title('Resources')),
        // This returns an array of all the document types
        // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
    