#include <string>
#include <vector>
using namespace std;
string reverse_words(string str)
{
	int l = str.length();
	int spCount = 0;
	for (int i = 0; i < l; i++)
	{
		if (str[i] == ' ')
		{
			spCount++;
		}
	}
	int total = spCount;
	vector<string> words(total + 1);
	string word = "";
	int addCount = 0;
	for (int i = 0; i < l; i++)
	{
		if (str[i] != ' ')
		{
			word.push_back(str[i]);
		}
		if (str[i] == ' ' || i == l - 1)
		{
			int wl = word.size();
			string reverse = word;
			for (int n = 0; n < wl; n++)
			{
				reverse[wl - 1 - n] = word[n];
			}
			words[addCount] = (reverse);
			word.erase();
			addCount++;
		}
	}
	string reversed = "";
	for (int n = 0; n < total + 1; n++)
	{
		string currentWord = words[n];

		if (n != total)
		{
			currentWord.push_back(' ');
		}
		reversed.append(currentWord);
	}
	return reversed;
}

#include <iostream>
int main()
{
	cout << reverse_words("Hello world my name is bla bla");
	return 0;
}