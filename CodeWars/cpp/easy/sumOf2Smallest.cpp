// This is the better solution
#include <vector>
#include <algorithm>
using namespace std;
long sumTwoSmallestNumbers(vector<int> numbers)
{
	sort(numbers.begin(),numbers.end());
	return numbers[0] + numbers[1];
}

/* This uses hard-coded code to get the smallest 
and second-smallest number instead of using the 
sort function from algorithm header
*/
/*
#include <vector>
using namespace std;
long sumTwoSmallestNumbers(vector<int> numbers)
{
	long n1, n2;
	int smallest = 0;
	int s = static_cast<int>(numbers.size());
	int i = 0;
	for (; i < s-1; i++)
	{
		if (numbers[i] < numbers[i + 1] && numbers[i] < numbers[smallest])
		{
			smallest = i;
		}else if(numbers[i] > numbers[i + 1] && numbers[i+1] < numbers[smallest]){
			smallest = i+1;
		}
	}
	i = 0;
	n1 = numbers[smallest];
	numbers.erase(numbers.begin() + smallest);
	s--;
	smallest=0;
	for (; i < s-1; i++)
	{
		if (numbers[i] < numbers[i + 1] && numbers[i] < numbers[smallest])
		{
			smallest = i;
		}else if(numbers[i] > numbers[i + 1] && numbers[i+1] < numbers[smallest]){
			smallest = i+1;
		}
	}
	n2 = numbers[smallest];
	return n1 + n2 ;
}
*/
#include <iostream>
int main()
{
	cout << sumTwoSmallestNumbers({7654321,7894321, 7654321,22,33,11,44,55,66,77,88,99,5,1});
	return 0;
}
