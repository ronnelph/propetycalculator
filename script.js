document.getElementById('calculateBtn').addEventListener('click', function () {
    const projectName = document.getElementById('projectName').value;
    const condoType = document.getElementById('condoType').value;
    const area = parseFloat(document.getElementById('area').value);
    const unitID = document.getElementById('unitID').value;
    const listValue = parseFloat(document.getElementById('listValue').value);
    const discount = parseFloat(document.getElementById('discount').value) || 0;
    const unitReservation = parseFloat(document.getElementById('unitReservation').value);
    const investmentTerm = document.getElementById('investmentTerm').value;
    const initialInvestmentMonthly = parseFloat(document.getElementById('initialInvestmentMonthly').value);
    const spreadMonths = parseFloat(document.getElementById('spreadMonths').value);
    const initialInvestmentLumpsum = parseFloat(document.getElementById('initialInvestmentLumpsum').value);
    const balance = parseFloat(document.getElementById('balance').value);
    const otherCharges = parseFloat(document.getElementById('otherCharges').value) || 0;

    // Error handling
    if (!area || !unitID || !listValue || !unitReservation || !spreadMonths) {
        alert("Please fill in all required fields.");
        return;
    }

    const unitValue = listValue * (1 - discount / 100);
    const otherChargesValue = (listValue * otherCharges) / 100;

    const initialInvestmentMonthlyAmount = (unitValue * initialInvestmentMonthly) - unitReservation;
    const monthlyInvestment = initialInvestmentMonthlyAmount / spreadMonths;

    const lumpsumInvestmentDate = new Date();
    lumpsumInvestmentDate.setMonth(lumpsumInvestmentDate.getMonth() + spreadMonths + 1);

    const balanceDate = new Date(lumpsumInvestmentDate);
    balanceDate.setMonth(balanceDate.getMonth() + 1);

    const currentDateTime = new Date().toLocaleString();

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Calculation Results:</h3>
        <p><strong>Project Name:</strong> ${projectName}</p>
        <p><strong>Unit Type:</strong> ${condoType}</p>
        <p><strong>Unit ID:</strong> ${unitID}</p>
        <p><strong>Area:</strong> ${area} Sqm</p>
        <p><strong>Unit Value:</strong> ₱${unitValue.toLocaleString(undefined, {
