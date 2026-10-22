#include <cmath>
using namespace std;
long int findNextSquare(long int sq)
{
	if (sqrt(sq) != floor(sqrt(sq)))
		return -1;
	long int rt = sqrt(sq);
	return pow(rt+1,2);
}
#include <iostream>
int main()
{
	for (int n = -10; n < 26; n++)
	{
		cout << findNextSquare(n) << endl;
	}
	return 0;
}