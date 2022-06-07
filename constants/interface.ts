export interface MonthSpend {
  // 用户id
  userId: string;
  // 当月花费明细
  dailySpendDetail: Array<DailySpend>;
  // 当月总花费
  monthSpend: number;
}

export interface DailySpend {
  // 日期
  date: string;
  // 项目
  spendItem: string;
  // 金额
  spendMoney: number;
  // icon
  spendUrl: string;
}
