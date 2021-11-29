export const BeerTableColumns = [
    {
        field: 'name',
        label: 'Name',
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        field: 'image_url',
        label: 'Beer Pic',
        renderCell: (cellValue) =>  { console.log(cellValue); return (<div> <img src={cellValue.formattedValue} alt={cellValue.name} id={cellValue.id} /> </div>) }
    },
    {
        field: 'tagline',
        label: 'Tagline',
    },
    {
        field: 'description',
        label:'Description',
    },
    {
        field: 'abv',
        numeric: true,
        label: 'ABV',
    },
    {
        field: 'ibu',
        numeric: true,
        label: 'IBU',
    },
]

export const BeerDataGridColumns = [
    {
        field: 'image_url',
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
        headerName: 'Name',
        description:'Beer names',
        flex: 0.2,
    },
    {
        field: 'tagline',
        headerName: 'Tagline',
        flex: 0.2,
        sortable: false,
        filterable: false,
    },
    {
        field: 'description',
        headerName:'Description',
        flex: 0.6,
        sortable: false,
    },
    {
        field: 'abv',
        headerName: 'ABV',
        description:'Alcohol By Volume',
        flex: 0.1,
        numeric: true,
    },
    {
        field: 'ibu',
        headerName: 'IBU',
        description:'International Bitters Unit',
        flex: 0.1,
        numeric: true,
    },
]