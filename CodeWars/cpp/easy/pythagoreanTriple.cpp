#include <algorithm>
#include <cmath>
using namespace std;
bool PythagoreanTriple(const int a, const int b, const int c)
{
  int arr[3]= {a,b,c};
  sort(&arr[0], &arr[3]);
  bool ans = pow(arr[0],2) + pow(arr[1],2)== pow(arr[2],2);
  return ans;
}
#include <iostream>
int main(){
	cout << PythagoreanTriple(3,4,5);
	return 0;
}
