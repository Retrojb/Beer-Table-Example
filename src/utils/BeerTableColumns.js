export const BeerTableColumns = [
    {
        id: 'name',
        label: 'Name',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        id: 'image_url',
        label: 'Beer Pic',
        sortable: false,
        disableSortBy: true,
    },
    {
        id: 'tagline',
        label: 'Tagline',
        options: {
            filter: false,
            sort: false,
        }
    },
    {
        id: 'description',
        label:'Description',
        options: {
            filter: false,
            sort: false,
        }
    },
    {
        id: 'abv',
        numeric: true,
        label: 'ABV',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        id: 'ibu',
        numeric: true,
        label: 'IBU',
        options: {
            filter: true,
            sort: true,
        }
    },
]