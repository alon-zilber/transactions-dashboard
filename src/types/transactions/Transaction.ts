export interface ITransaction {
  bank: string;
  account_uuid: string;
  organization_uuid: string;
  currency: string;
  status: string;
  is_temporary: boolean;
  type: string;
  is_money_in: boolean;
  day: string;
  amount: number;
  amount_in_usd: number;
}
