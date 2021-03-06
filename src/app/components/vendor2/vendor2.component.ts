import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor2',
  templateUrl: './vendor2.component.html',
  styleUrls: ['./vendor2.component.css']
})
export class Vendor2Component implements OnInit {
  content_header_name = "ลงทะเบียนตู้คอนเทนเนอร์ (Container Register)";

  TableHeader = ["No.", "วันที่เข้ารับสินค้า", "INVOICE NO.", "AGENT", "รับตู้ (PICK UP AT)", "คืนตู้ (RETURN TO)", 
  "คืนตู้ (RETURN TO)", "CLOSING DATE", "CLOSING TIME","ETD LCB","วันที่รับตู้เปล่า","CONTAINER NO.","SEAL NO.",
  "น้ำหนักตู้เปล่า(VGM Tare)","SIZE CONTAINER (“)", "วันที่คืนตู้หนัก","REMARKS","เวลาบันทึกล่าสุด",""];
  
  TableData= [
    { id: 1, date: "26/8/19", inv: "IRPC 3954-19", agent: "ONE", booking: "BKKVE0261800", pickup: "KRC", return:"C1C2",
    close_date:"11-8-19", close_time:"23.59",ETD:"14-8-19",empty_cont:"24/8/19",cont_num:"NYKU3768136",seal_num:"THAG57001",
    cont_weight:"2200",cont_size:"20",give_date:"",remark:"",latest_time:"14-8-19"},
  ];
  _object = Object;

  constructor() { }

  ngOnInit() {
  }

}
