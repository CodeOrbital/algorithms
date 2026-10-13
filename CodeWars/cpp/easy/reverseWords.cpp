#include <string>
#include <vector>
using namespace std;
string reverse_words(const string &str)
{
	string text = str;
	string migrator = "";
	if (text[0] == ' ')
	{
		text.erase(0, 1);
	}
	if (text[(text.length()) - 1] == ' ')
	{
		text.erase(text.length() - 1, 1);
	}
	int l = text.size();
	int spCount = 0;

	for (int s = 0; s < l; s++)
	{
		if (text[s] == ' ')
		{
			spCount += 1;
		}
	}
	int total = spCount;
	vector<string> order(total + 1);
	int orderSize = size(order);
	for (int n = 0; n < l && spCount >= 0; n++)
	{
		if (text[n] != ' ')
		{
			migrator.push_back(text[n]);
		}
		if (text[n] == ' ' || n == l-1)
		{
			order[spCount] = migrator;
			spCount--;
			migrator.erase();
		}
	}
	text="";
	for(int i=0; i<(total+1);i++){
		string word = i < total ? order[i] + string(1,' ') : order[i];
		text.append(word);
	}
	return text;
}
#include <iostream>
int main()
{
	string txt;
	txt = "Mr. Abraham Smith Johnson";
	cout << reverse_words(txt);

	return 0;
}
