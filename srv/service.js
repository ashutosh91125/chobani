const cds = require('@sap/cds');
class zomato extends cds.ApplicationService{

    async init(){
        const db = await cds.connect.to('db');
        const {zomato} = cds.entities('scp.cloud');

        this.on('READ','createData',async (req)=>{
            let enteries = [
                {
                    "order_id" : 1,
                    "order_name" : "Pizza",
                    "order_price" :500
                },
                {  
                    "order_id" : 2,
                    "order_name" : "Burger",
                    "order_price" :300
                }
            ]
            for(var i =0;i<enteries.length;i++){
                await INSERT.into(zomato).columns("order_id","order_name","order_price"
                ).values(enteries[i].order_id,enteries[i].order_name,enteries[i].order_price);
            }

            let results = await SELECT.from(zomato);
            return results;
        });

        this.on('READ','readData',async (req)=>{
            let results = await SELECT.from(zomato);
            return results;
        })

        this.on('READ','deleteData',async (req)=>{
            await DELETE.from(zomato).where({'order_name':'Pizza'});
            let results = await SELECT.from(zomato);
            return results;
        })

        await super.init();
    }

}

module.exports = {zomato};