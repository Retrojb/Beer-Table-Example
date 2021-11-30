export const BeerTableColumns = [
    {
        field: 'name',
        key: '1',
        label: 'Name',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        field: 'image_url',
        key: '2',
        label: 'Beer Pic',
        renderCell: (cellValue) =>  { console.log(cellValue); return (<div> <img src={cellValue.formattedValue} alt={cellValue.name} id={cellValue.id} /> </div>) }
    },
    {
        field: 'tagline',
        key: '3',
        label: 'Tagline',
    },
    {
        field: 'description',
        key: '4',
        label:'Description',
    },
    {
        field: 'abv',
        key: '5',
        numeric: true,
        label: 'ABV',
    },
    {
        field: 'ibu',
        key: '6',
        numeric: true,
        label: 'IBU',
    },
]

export const BeerDataGridColumns = [
    {
        field: 'image_url',
        key: '1',
        headerName: 'Image',
        description:'Beer labels',
        flex: 0.1,
        sortable: false,
        filterable: false,
        renderCell: (cellValue) =>  { 
            return (
                <div> 
                    <img 
                        src={cellValue.formattedValue} 
                        alt={cellValue.name} 
                        style={{ width: 30, height: 30 }} 
                    /> 
                </div>
            )}
    },
    {
        field: 'name',
        key: '2',
        headerName: 'Name',
        description:'Beer names',
        flex: 0.2,
    },
    {
        field: 'tagline',
        key: '3',
        headerName: 'Tagline',
        flex: 0.2,
        sortable: false,
        filterable: false,
    },
    {
        field: 'description',
        key: '4',
        headerName:'Description',
        flex: 0.6,
        sortable: false,
    },
    {
        field: 'abv',
        key: '5',
        headerName: 'ABV',
        description:'Alcohol By Volume',
        flex: 0.1,
        numeric: true,
    },
    {
        field: 'ibu',
        key: '6',
        headerName: 'IBU',
        description:'International Bitters Unit',
        flex: 0.1,
        numeric: true,
    },
]