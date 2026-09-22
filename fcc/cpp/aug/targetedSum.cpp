#include <iostream>
#include <vector>

using namespace std;

vector<int> findTarget(vector<int> coll, int target)
{
	int len = coll.size();
	for (int n = 0; n < len; n++)
	{
		for (int i = 0; i < len; i++)
		{
			if (n != i)
			{
				if (coll[n] + coll[i] == target)
				{
					return {n, i};
				}
			}
		}
	}
	cout << "Target Not Found" << endl;
	return {};
}
