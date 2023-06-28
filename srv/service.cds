using { scp.cloud } from '../db/schema';

service zomato{
    entity zomato as projection on cloud.zomato;
    entity zomato_name as select from cloud.zomato{order_name};

    entity readData {
    order_id : Integer;
    order_name : String(50);
    order_price: Integer;
    }

    entity createData {
    order_id : Integer;
    order_name : String(50);
    order_price: Integer;
    }

    entity deleteData{
    order_id : Integer;
    order_name : String(50);
    order_price: Integer;
        
    }
}
