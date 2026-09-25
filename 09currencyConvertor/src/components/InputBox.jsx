function InputBox({ 
    label, 
    amount, 
    onAmountChange, 
    onCurrencyChange, 
    currencyOptions = [], 
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
  return (
    <div className="flex items-center justify-center bg-slate-200">
      <div className="w-full p-8 border border-slate-200 bg-white">
        <div className="flex bg-white p-3 border border-slate-300">
          <div className="w-1/2">
            <label
              htmlFor="currency-input"
              className="block mb-2 text-small font-medium text-slate-700"
            >
              {label}
            </label>
            <input
              id="currency-input"
              type="number"
              value={amount}  
              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              placeholder="0"
              disabled={amountDisable}
              className="w-full text-slate-900 placeholder-slate-400 outline-none"
            />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="mb-2 w-full">Currency Type</p>
            <select className="cursor-pointer"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
