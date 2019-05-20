import {
  DefaultLayout,
  DefaultPage,
  TeamPage
} from 'src/pages'

export default () => [
  {
    path: '',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: DefaultPage
      },
      {
        path: 'team',
        component: TeamPage
      }
    ]
  }
]
