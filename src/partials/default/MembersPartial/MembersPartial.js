import * as components from 'src/components'

export default {
  components: {
    ...components
  },
  props: {
    isOtherVisibleDefault: Boolean
  },
  computed: {
    persons () {
      return [
        {
          id: 1,
          imageUrl: '/assets/img/members/01 - Igor Pavlenko.png',
          title: 'Igor Pavlenko',
          subtitle: 'CEO, Accounting'
        },
        {
          id: 2,
          title: 'Steve Leskiv',
          subtitle: 'CCO, Art Director'
        },
        {
          id: 3,
          imageUrl: '/assets/img/members/03 - Boris Tarelkin.png',
          title: 'Boris Tarelkin',
          subtitle: 'CTO, Tech Lead'
        },
        {
          id: 4,
          imageUrl: '/assets/img/members/04 - Liana Edwards.png',
          title: 'Liana Edwards',
          subtitle: 'Business Development Representative'
        },
        {
          id: 5,
          imageUrl: '/assets/img/members/05 - Mikhail Kardaev.png',
          title: 'Mikhail Kardaev',
          subtitle: 'Head of Back-end development'
        },
        {
          id: 6,
          imageUrl: '/assets/img/members/06 - Artem Valyakin.png',
          title: 'Artem Valyakin',
          subtitle: 'Head of Mobile development'
        },
        {
          id: 7,
          imageUrl: '/assets/img/members/07 - Igor Fomin.png',
          title: 'Igor Fomin',
          subtitle: 'Head of Front-end development'
        },
        {
          id: 8,
          imageUrl: '/assets/img/members/08 - Evgenii Dobrynin.png',
          title: 'Evgenii Dobrynin',
          subtitle: 'Head of QA Department'
        },
        {
          id: 9,
          title: 'Petr Tsatsin',
          subtitle: 'AI Consultant'
        },
        {
          id: 10,
          imageUrl: '/assets/img/members/10 - Georgy Selenskih.png',
          title: 'Georgy Selenskih',
          subtitle: 'DevOps Engineer, System Administrator'
        },
        {
          id: 11,
          title: 'Sergei Zagorodin',
          subtitle: 'Senior Back-end Developer'
        },

        {
          id: 12,
          imageUrl: '/assets/img/members/12 - Konstantin Brynchikov.png',
          title: 'Konstantin Brynchikov',
          subtitle: 'Senior Back-end Developer'
        },
        {
          id: 13,
          imageUrl: '/assets/img/members/13 - Julia Tsygankova.png',
          title: 'Julia Tsygankova',
          subtitle: 'Front-end Developer'
        },
        {
          id: 14,
          imageUrl: '/assets/img/members/14 - Artem Migranov.png',
          title: 'Artem Migranov',
          subtitle: 'Front-end Developer'
        },
        {
          id: 15,
          imageUrl: '/assets/img/members/15 - Dmitry Vylegjanin.png',
          title: 'Dmitry Vylegjanin',
          subtitle: 'Back-end Developer'
        },
        {
          id: 16,
          imageUrl: '/assets/img/members/16 - Nikita Maksimov.png',
          title: 'Nikita Maksimov',
          subtitle: 'QA Engineer'
        },
        {
          id: 17,
          imageUrl: '/assets/img/members/17 - Nikita Kochetkov.png',
          title: 'Nikita Kochetkov',
          subtitle: 'Project Manager'
        },
        {
          id: 18,
          imageUrl: '/assets/img/members/18 - Alexander Korsun.png',
          title: 'Alexander Korsun',
          subtitle: 'Back-end Developer'
        },
        {
          id: 19,
          imageUrl: '/assets/img/members/19 - Petr Evsikov.png',
          title: 'Petr Evsikov',
          subtitle: 'Mobile Developer'
        },
        {
          id: 20,
          imageUrl: '/assets/img/members/20 - Ilya Bochkov.png',
          title: 'Ilya Bochkov',
          subtitle: 'Back-end Developer'
        },
        {
          id: 21,
          imageUrl: '/assets/img/members/21 - Larisa Bulatova.png',
          title: 'Larisa Bulatova',
          subtitle: 'Accountant'
        }
      ]
    },
    topPersons () {
      return this.persons.slice(0, 8)
    },
    otherPersons () {
      return this.persons.slice(8)
    }
  },
  data () {
    return {
      isOtherVisible: !!this.isOtherVisibleDefault
    }
  },
  methods: {
    handleViewAll () {
      this.isOtherVisible = true
    }
  }
}
