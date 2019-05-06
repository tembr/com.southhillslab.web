import {
  DefaultLayout,
  DefaultPage
} from 'src/pages'

export default () => [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: DefaultPage
      }
    ]
  }
]
