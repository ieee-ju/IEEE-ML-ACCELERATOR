void flip(vector<long long> &x, int s, int e)
{
    for (int i = s - 1; i <= e - 1; i++)
    {
        if (x[i] == 0)
        {
            x[i] = 1;
        }
        else
        {
            x[i] = 0;
        }
    }
}
void add(vector<long long> &x, vector<long long> &y, int p, int n)
{
    for (int i = 0; i < n; i++)
    {
        y[i] = y[i] + x[i] * p;
    }
}
vector<long long> Solution::solve(int A, vector<vector<int>> &B)
{
    vector<long long> x(A, 0), y(A, 0);
    vector<long long> ans;
    for (int i = 0; i < B.size(); i++)
    {
        int qType = B[i][0];
        int p1 = B[i][1];
        int p2 = B[i][2];
        if (qType == 1)
        {
            flip(x, p1, p2);
        }
        else if (qType == 2)
        {
            add(x, y, p1, A);
        }
        else
        {
            ans.push_back(y[p1 - 1]);
        }
    }
    return ans;
}