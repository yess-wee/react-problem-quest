export const data = {
    name: "root",
    isFolder: true,

    items: [
        {
            name:"public",
            isFolder: true,

            items:[
                {
                    name: "index.html",
                    isFolder:false,
                }
            ]

        },
        {
            name:"src",
            isFolder: true,


            items:[
                {
                    name:"App.js",
                    isFolder:false,
                },
                {
                    name:"index.js",
                    isFolder:false,
                },
                {
                    name:"style.css",
                    isFolder:false,
                },
                {
                    name:"Components",
                    isFolder:true,
                    items:[
                        {
                            name:"Explorer.js",
                            isFolder:false,
                        },
                    ]
                },
                {
                    name:"Constants",
                    isFolder:true,
                    items:[
                        {
                            name:"data.js",
                            isFolder:false,
                        },
                    ]
                }
            ]


        },
        {
            name:"package.json",
            isFolder:false,
        }
    ]
}