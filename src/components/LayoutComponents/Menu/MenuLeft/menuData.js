export default [
    {
        title: 'Home',
        key: 'home',
        url: '/home',
        icon: 'icmn icmn-stack',
    },
    {
        title: 'About',
        key: 'abour',
        url: '/about',
        icon: 'icmn icmn-stack',
    },
    {
        title: 'Calendar',
        key: 'calendar',
        url: '/calendar',
        icon: 'icmn icmn-books',
    },
    {
        title: 'Useful Forms',
        key: 'forms',
        url: '/forms',
        icon: 'icmn icmn-books',
    },
    {
        title: 'Current & Past Leaders',
        key: 'leaders',
        url: '/leaders',
        icon: 'icmn icmn-books',
        children: [
            {
                title: 'Current State Officers',
                key: 'stateofficers',
                url: '/leaders/stateOfficers',
                icon: 'icmn icmn-books',
            },
            {
                title: 'Current State Staff',
                key: 'statestaff',
                url: '/leaders/stateStaff',
                icon: 'icmn icmn-books',
            },
            {
                title: 'Past State Master Councilors',
                key: 'psmc',
                url: '/leaders/psmc',
                icon: 'icmn icmn-books',
            },
            {
                title: 'Past State Sweethearts',
                key: 'pastSweethearts',
                url: '/leaders/pastSweethearts',
                icon: 'icmn icmn-books',
            },
            {
                title: 'Past Executive Officers',
                key: 'pastEos',
                url: '/leaders/pastEos',
                icon: 'icmn icmn-books',
            }
        ]
    },
    {
        title: 'User Portal',
        key: 'userPortal',
        url: '/userPortal',
        icon: 'icmn icmn-books',
    },
    {
        title: 'Contact US',
        key: 'contactUS',
        url: '/contactUs',
        icon: 'icmn icmn-books',
    }
]

/*

        children: [
            {
                title: 'View Calendar',
                key: 'empty',
                url: '/empty',
                icon: 'icmn icmn-books',
            },
            {
                title: 'Submit PTO Request',
                key: 'empty',
                url: '/empty',
                icon: 'icmn icmn-books',
            },
            {
                title: 'Add Calendar Event',
                key: 'empty',
                url: '/empty',
                icon: 'icmn icmn-books',
            }
        ]
 */