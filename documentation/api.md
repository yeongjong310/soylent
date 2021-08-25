# All about product related apis

`/api/collections/<string:category>`

: return items which is in category(all-powder, all-drinks, squared)

```json
{
    '_comment': '/api/collections/all-powder'
    'all-powder': {
        ..
    },
    'banners':{
        ..
    }
}
```

`/api/products/<string:slug>`

: return product detail

```json
```

`/api/products/categories`

: return all categories

```json
{
    'categories': ['','']
}
```

`/api/faq`

: return faq materials

```json
{'faq':[
    {
        'question':'',
        'answer':''
    }, ...
]}
```

`/api/featured`

: return featured product randomly.
Max length of item: 6
Get all items if item is less than 6

```json
{
    'all-drinks':[
        {items},
    ],
    'all-powder':[{items}],
    'squared':[{items}]
}
```
