def bonAppetit(bill, k, b):
    bill.pop(k)
    b_charged = sum(bill)//2
    cond =b_charged-b
    result= "Bon Appetit" if cond==0 else cond 
    print(result)


bill = [3 ,10,2 ,9]
k = 1
b= 12
print(bonAppetit(bill, k, b))

[1,2,2].pop()

#1700
#12.09