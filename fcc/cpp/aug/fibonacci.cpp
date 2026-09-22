#include <iostream>
#include <vector>
using namespace std;

vector<long long int> fibonacciSequence(int startSequence[2], int length)
{
	if (length < 1)
		return {};

	vector<long long int> answer;
	if (length < 3)
	{
		for (int c = 0; c < length; c++)
		{
			answer.push_back(startSequence[c]);
		}
		return answer;
	}
	long long int before = startSequence[0];
	long long int current = startSequence[0];
	long long int next = startSequence[1];
	answer.push_back(current);
	answer.push_back(next);
	for (int i = 0; i < length - 2; i++)
	{
		before = current;
		current = next;
		next = before + current;
		answer.push_back(next);
	}

	return answer;
}