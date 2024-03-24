# Define tax rates and deductions
tax_rate = 0.3  # 30% tax rate
nhif_deduction = 2000  # NHIF deduction amount
nssf_deduction_rate = 0.06  # 6% NSSF deduction rate

def calculate_net_salary(basic_salary, benefits):
    # Calculate gross salary
    gross_salary = basic_salary + benefits
    
    # Calculate tax
    tax = gross_salary * tax_rate
    
    # Calculate NSSF deductions
    nssf_deduction = gross_salary * nssf_deduction_rate
    
    # Calculate net salary
    net_salary = gross_salary - tax - nhif_deduction - nssf_deduction
    
    # Return results
    return {
        'gross_salary': gross_salary,
        'tax': tax,
        'nhif_deduction': nhif_deduction,
        'nssf_deduction': nssf_deduction,
        'net_salary': net_salary
    }

# Test the function
basic_salary = float(input("Enter basic salary: "))
benefits = float(input("Enter benefits: "))

result = calculate_net_salary(basic_salary, benefits)

# Print the results
print("Gross Salary:", result['gross_salary'])
print("Tax:", result['tax'])
print("NHIF Deduction:", result['nhif_deduction'])
print("NSSF Deduction:", result['nssf_deduction'])
print("Net Salary:", result['net_salary'])
