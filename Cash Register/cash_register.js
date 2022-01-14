function checkCashRegister(price, cash, cid) {
    const change = [];
    const changeTemp = [];
    let moneyChange = cash - price;
    // Round to 2 decimal numbers
    moneyChange = parseFloat(moneyChange.toFixed(2));
    let funds = 0;
    const denomination = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  
    // Calculate the total funds in the cash register
    for (let i=0; i<cid.length; i++) {
      funds += cid[i][1]; 
    }
    // Round to 2 decimal numbers
    funds = parseFloat(funds.toFixed(2));
   
    // Check if the funds are enough
    if (funds < moneyChange)
      return {status: "INSUFFICIENT_FUNDS", change: []};
    else if (funds === moneyChange)
      return {status: "CLOSED", change: cid};
    else {
        
        //Reverse the cid, to provide correct order of change, add a third element with the amount of bills for each denomination
        const newCid = [...cid];
        newCid.reverse();

        for (let i=0; i<newCid.length; i++) {
            newCid[i].push(Math.round(newCid[i][1]/denomination[i]));
        }
        
        // The funds are enough, so I need to calcualte the change
        for (let i=0; i<newCid.length; i++) {
            changeTemp[0] = 0;
            changeTemp[1] = 0;
            while (moneyChange >= denomination[i] && newCid[i][2] > 0) {
                moneyChange = parseFloat(moneyChange - denomination[i]).toFixed(2);
                newCid[i][1] -= denomination[i];
                newCid[i][2]--;
                changeTemp[0] = newCid[i][0];
                changeTemp[1] +=  denomination[i];
            }
            
            if (changeTemp[0] != 0) {
                change.push([...changeTemp]);
            }
        }
        
        //If the founds are enough but I can't give the change
        if (moneyChange != 0)
            return {status: "INSUFFICIENT_FUNDS", change: []};  
        
        //If the transactions are OK
        return {status: "OPEN", change: change};
    }
  }

  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
