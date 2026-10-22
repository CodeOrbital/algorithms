// This uses loop
/*
int get_sum(int a, int b)
{
	if(a == b)
		return a;
	int n1 = a < b ? a : b;
	int n2 = a + b - n1;
	int sum= 0;
	for (int i =n1; i<=n2;i++){
		sum +=i;
	}
	return sum;
}
*/

// This solution uses Gauss's summation formula
int get_sum(int a, int b)
{
	if(a == b)
		return a;
	int n1 = a < b ? a : b;
	int n2 = a + b - n1;
	int sum= (n1 + n2)*(n2-n1+1)/2;
	return sum;
}