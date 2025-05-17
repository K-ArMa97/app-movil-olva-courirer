export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
  };
  export type DrawerParamList = {
    Home: undefined;
    Shipments: undefined;
    Profile: undefined;
    ShipmentDetail: { shipmentId: string };
    CreateShipment: undefined;
    EditShipment: { shipmentId: string };
  };
