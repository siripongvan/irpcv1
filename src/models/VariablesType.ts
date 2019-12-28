//---------- Class Variable---------------------

/*------- Mastr --------*/

export class GetGroupDate {
    id: number;
    name: string;
}

export class GetPickupReturn {
    id: number;
    code: string;
    name: string;
    is_active: string;
    is_pickup: string;
}

export class GetAgentContainer {
    id: number;
    code: string;
    name: string;
    is_active: string;
}

export class GetPlant {
    id: number;
    name: string;
    is_active: string;
}

export class GetStorage {
    id: number;
    storage_code: string;
    storage_name: string;
    is_active: string;
}

export class GetShipmentType {
    id: number;
    code: string;
    description: string;
}

export class GetStatus {
    id: number;
    code: string;
    name: string;
    is_active: string;
}

export class GetVehicleGroup {
    id: number;
    code: string;
    description: string;
    is_active: string;
}

export class GetTypePacking {
    id: number;
    code: string;
    name: string;
}

export class GetpReqEquipments {
    id: number;
    code: string;
    name: string;
    is_active: string;
}

/*------- End Mastr --------*/


/*-------  Auth --------*/

export class Login {
    id: number;
    userId: string;
    userName: string;
    thaiName: string;
    isLocal: string;
    isAd: string;
    isVendor: string;
    departmentName: string;
    roleName: string;
    hash: string;
    carrierID: string;
    carrierCode: string;
    carrierName: string;
}

/*------- End Auth --------*/

/*-------  Vendor --------*/

export class GetCarrierVehicle {
    carrier_id: number;
    vehicle_group_id: number;
    vehicle_group_code: string;
    vehicle_group_name: string;
}

export class ValueInsertUpdateTrQuotaVechicle {
    vehicleGroupId: number;
    qty: number;
    quotaVehicleId: number;
}

/*------- End Vendor --------*/

/*-------  Process --------*/
export class ProcessGetTruckAmountNoti {
    tr_Quota_vehicle_id: number;
    quota_date: string;
    carrier_id: number
    carrier_code: string
    carrier_name: string
    group_date_id: number
    groupname: string
    vehicle_group_id: number
    vehicle_group_code: string
    vehicle_group_name: string
    qty: number
    last_datetime: string
}

export class ProcessSerachContainerReg {
    containner_regis_id: number;
    carrier_id: number;
    carrier_code: string;
    carrier_name: string;
    recieve_date: string;
    invoice_no_text: string;
    booinkg_No_text: string;
    container_No: string;
    seal_No: string;
    size_container: number;
    return_date: string;
    vgM_Tare: number;
    closing_datetime: string;
    etd_lcb: string;
    agent_container_id: number;
    agent_container_code: string;
    agent_container_name: string;
    pickup_return_id: number;
    pickup_return_code: string;
    pickup_return_name: string;
    is_Shipment_No_assigned: string;
}

export class ProcessSearchstatusOverAllbyuserid {
    loading_Datetime: string;
    shipment_Type: string;
    current_status_id: string;
    current_status: string;
    shipment_No: string;
    deliver_No: string;
    invoice_No: string;
    booinkg_No: string;
    container_No: string;
    seal_No: string;
    queue_Number: string;
    item_no: string;
    mat_no: string;
    mat_desc: string;
    do_qty: string;
    do_saleunit: string;
    lot_no: string;
    qty: string;
    uom: string;
    truck_Load: string;
    customer_name: string;
    regis_confirm_datetime: string;
    queue_Call_DateTime: string;
    queue_End_DateTime: string;
    plannig_Datetime: string;
    product_preparing_Datetime: string;
    truck_Checkin_Datetime: string;
    driver_Checkin_Datetime: string;
    loading_Start_Datetime: string;
    weight_In_Datetime: string;
    labor_Register_Datetime: string;
    weight_Out_Datetime: string;
    driver_text: string;
    vehicle_text: string;
    firstname_driver: string;
    lastname_driver: string;
    dO_Loading_Confirm_Datetime: string;
    dO_Loading_Start_Datetime: string;
    dO_Loading_End_Datetime: string;
    shipment_id: string;
    dO_id: string;
    grade_id: string;
    lot_id: string;
    storage_name: string;
    dock_name: string;
    shipment_storage_name: string;
}

export class ProcessSearchCarrierQuota {
    loading_Datetime: string
    shipment_Type: string
    current_status: string
    shipment_No: string
    deliver_No: string
    invoice_No: any
    booinkg_No: any
    container_No: any
    seal_No: any
    queue_Number: any
    item_no: string
    mat_no: string
    mat_desc: string
    do_qty: number
    do_saleunit: string
    lot_no: any
    qty: any
    uom: any
    truck_Load: number
    customer_name: any
    regis_confirm_datetime: any
    queue_Call_DateTime: any
    queue_End_DateTime: any
    plannig_Datetime: string
    product_preparing_Datetime: any
    truck_Checkin_Datetime: any
    driver_Checkin_Datetime: any
    driver_text: any
    vehicle_text: any
    firstname_driver: any
    lastname_driver: any
    dO_Loading_Confirm_Datetime: any
    dO_Loading_Start_Datetime: any
    dO_Loading_End_Datetime: any
    storage_name: any
    dock_name: any
    packing_rem: any
    fumigation_rem: any
    surveyor_rem: any
    marking_rem: any
    shipping_ins: any
    shipment_storage_name: string
    route_name: any
    type_packing_name: any
    shipment_id: number
    shipments_link_id: any
    is_Trailer: any
    carrier_id: any
    customer_id: any
    vehicle_id: any
    current_status_id: number
    shipment_storage_id: number
    dO_id: number
    grade_id: number
    lot_id: any
}

export class ProcessSearchWarehouseConfirmByItem
{
    loading_date: Date;
    dc: any;
    planning_time: Date;
    prepairing_time: any;
    shipment: string;
    delivery_no: string;
    grade: string;
    delivery_qty: number;
    truck_load: number;
    customer_lot_no: string;
    lot_no_from_wms: string;
    new_lot_from_lo: string;
    invoice_no: any;
    ship_to: string;
    sold_to: any;
    delivery_item_note: any;
    packing_remark: any;
    other_intruction: string;
    marking_remark: any;
    fumigation_remark: any;
    storage_location: any;
    product: string;
    type_loading: string;
    material_document: string;
    province: string;
}

export class ProcessSearchWarehouseConfirmByGroup
{
    loading_date: Date;
    dc: any;
    planning_time: Date;
    prepairing_time: any;
    shipment: string;
    delivery_no: string;
    grade: string;
    delivery_qty: number;
    truck_load: number;
    customer_lot_no: string;
    lot_no_from_wms: string;
    new_lot_from_lo: string;
    invoice_no: any;
    ship_to: string;
    sold_to: any;
    delivery_item_note: any;
    packing_remark: any;
    other_intruction: string;
    marking_remark: any;
    fumigation_remark: any;
    storage_location: any;
    product: string;
    type_loading: string;
    material_document: string;
    province: string;
}

/*------- End Process --------*/

/*-------  ProcessCb  --------*/
export class AgentContainer {
    agentcontainerid: number;
    code: string;
    name: string;
}

export class Carrier {
    carrierid: number;
    code: string;
    name: string;
}

export class Driver {
    driverid: number;
    driveR_CODE: string;
    firsT_NAME: string;
    lasT_NAME: string;
    perS_CODE: string;
}

export class GroupDate {
    groupdateid: number;
    code: string;
    name: string;
}

export class PickupReturn {
    pickupreturnid: number;
    code: string;
    name: string;
}

export class Plant {
    plantid: number;
    code: string;
    name: string;
}

export class ReqQequipments {
    reqqequipmentsid: number;
    code: string;
    name: string;
}

export class Route {
    routeid: number;
    code: string;
    description: string;
}

export class ShipmentType {
    shipmenttypeid: number;
    code: string;
    description: string;
}

export class Status {
    currentstatusid: number;
    code: string;
    name: string;
}

export class Response {
    storageid: number;
    storage_code: string;
    storage_name: string;
}

export class CbStorage {
    storageid: number
    storage_code: string
    storage_name: string
}

export class StorageDock {
    stroragedockid: number;
    dock_name: string;
}

export class TypePacking {
    typepackingid: number;
    code: string;
    name: string;
}

export class Vehicle {
    vehicleid: number;
    vehicle: string;
    veH_TEXT: string;
}

// แก้ --- เพิ่ม isTail
export class VehicleGroup {
    vehiclegroupid: number;
    code: string;
    description: string;
    isTail:string;
}

export class VehicleType {
    vehicletypeid: number;
    code: string;
    description: string;
}

export class YesNo {
    yesnoid: number;
    code: string;
    name: string;
}

/*------- End ProcessCb  --------*/

//----------End Class Variable------------------


//---------- Function Api ---------------------

/*-------Api Get---------*/

//*******Master*********

export interface ResponseGetGroupDate {
    result: GetGroupDate[];
    message: string;
}

export interface ResponseGetPickupReturn {
    result: GetPickupReturn[];
    message: string;
}

export interface ResponseGetAgentContainer {
    result: GetAgentContainer[];
    message: string;
}

export interface ResponseGetPlant {
    result: GetPlant[];
    message: string;
}

export interface ResponseGetStorage {
    result: GetStorage[];
    message: string;
}

export interface ResponseGetShipmentType {
    result: GetShipmentType[];
    message: string;
}

export interface ResponseGetStatus {
    result: GetStatus[];
    message: string;
}

export interface ResponseGetVehicleGroup {
    result: GetVehicleGroup[];
    message: string;
}

export interface ResponseGetTypePacking {
    result: GetTypePacking[];
    message: string;
}

export interface ResponseGetpReqEquipments {
    result: GetpReqEquipments[];
    message: string;
}
//*******End Master*********

//*******Auth*********

export interface SendLogin {
    userId: string;
    hash: string;
}

export interface ResponseLogin {
    result: Login;
    message: string;
}

//*******End Auth*********

//*******Vendor*********

export interface ResponseGetCarrierVehicle {
    result: GetCarrierVehicle[];
    message: string;
}

export interface ResponseDeleteTrQuotaVechicle {
    result: string;
    message: string;
}

export interface SendDeleteTrQuotaVechicle {
    userId: number;
    id: number;
}

export interface ResponseDeleteProcessTrContainnerRegis {
    result: string;
    message: string;
}

export interface SendDeleteProcessTrContainnerRegis {
    userId: number;
    id: number;
}

export interface ResponseProcessAssignVendorQuota {
    result: string;
    message: string;
}

export interface SendProcessAssignVendorQuota {
    shipmentId: number;
    planingDatetime: string;
    carrierId: number;
    vehicleGroupId: number;
    shipmentLink: string;
    isStat: string;
    ireqEQP: number;
    isOutside: string;
    shipmentRouteId: number;
    typePackingId: number;
    userId: number;
}

export interface ResponseProcessClearandReturnAssignVendorQuota {
    result: string;
    message: string;
}

export interface SendProcessClearandReturnAssignVendorQuota {
    shipmentId: number;
    carrierId: number;
    userId: number;
}

export interface ResponseInsertUpdateTrQuotaVechicle {
    result: string;
    message: string;
}

export interface SendInsertUpdateTrQuotaVechicle {
    quotaDate: string;
    carrierId: number;
    groupDateId: number;
    userId: number;
    value: ValueInsertUpdateTrQuotaVechicle[];
}

export interface ResponseInsertUpdateProcessTrContainnerRegis {
    result: string;
    message: string;
}

export interface SendInsertUpdateProcessTrContainnerRegis {
    containnerRegisId: number;
    carrierId: number;
    recieveDate: string;
    containerNo: string;
    sealNo: string;
    vgmTare: number;
    sizeContainer: number;
    agentContainerId: number;
    pickupRreturnId: number;
    closingDatetime: string;
    etdLcb: string;
    returnDate: string;
    invoiceNoText: string;
    booinkgNoText: string;
    userId: number;
}

//*******End Vendor*********

//*******Process*********
export interface ResponseProcessGetTruckAmountNoti {
    result: ProcessGetTruckAmountNoti[];
    message: string;
}

export interface ResponseProcessSerachContainerReg {
    result: ProcessSerachContainerReg[];
    message: string;
}

export interface ResponseProcessSearchstatusOverAllbyuserid {
    header: [];
    result: [];
    // result: ProcessSearchstatusOverAllbyuserid[];
    message: string;
}

export interface SendProcessSearchstatusOverAllbyuserid {
    userId: number,
    invoiceNo: string,
    shipmentNo: string,
    deliveryNo: string,
    loadingDate: string,
    storageList: string,
    plantList: string,
    // ------แก้ type
    shipmentTypeId: string,
    currentStatusId: string
}

export interface ResponseProcessSearchCarrierQuota
{
    result: ProcessSearchCarrierQuota[];
    message: string;
}

export interface ResponseProcessSearchWarehouseConfirmByItem
{
    result: ProcessSearchWarehouseConfirmByItem[];
    message: string;
}


export interface ResponseProcessSearchWarehouseConfirmByGroup
{
    result: ProcessSearchWarehouseConfirmByGroup[];
    message: string;
}
//*******End Process*********

//******* ProcessCb*********
export interface ResponseAgentContainer {
    result: AgentContainer[];
    message: string;
}

export interface ResponseCarrier {
    result: Carrier[];
    message: string;
}

export interface ResponseDriver {
    result: Driver[];
    message: string;
}

export interface ResponseGroupDate {
    result: GroupDate[];
    message: string;
}

export interface ResponsePickupReturn {
    result: PickupReturn[];
    message: string;
}

export interface ResponsePlant {
    result: Plant[];
    message: string;
}

export interface ResponseReqQequipments {
    result: ReqQequipments[];
    message: string;
}

export interface ResponseRoute {
    result: Route[];
    message: string;
}

export interface ResponseShipmentType {
    result: ShipmentType[];
    message: string;
}

export interface ResponseStatus {
    result: Status[];
    message: string;
}

export interface ResponseStorage {
    result: CbStorage[];
    message: string;
}

export interface ResponseStorageDock {
    result: StorageDock[];
    message: string;
}

export interface ResponseTypePacking {
    result: TypePacking[];
    message: string;
}

export interface ResponseVehicle {
    result: Vehicle[];
    message: string;
}

export interface ResponseVehicleGroup {
    result: VehicleGroup[];
    message: string;
}

export interface ResponseVehicleType {
    result: VehicleGroup[];
    message: string;
}

export interface ResponseYesNo {
    result: YesNo[];
    message: string;
}

//*******End ProcessCb*********

//----------End Function Api ------------------