class Solution {
public:
    int solve(int i , vector<int>& nums , vector<int>& dp) {
        if(i == nums.size() - 1) return 1;
        if(i >= nums.size() || nums[i] == 0) return 1e9;

        if(dp[i] != -1) return dp[i];

        int mini = INT_MAX;
        for(int j = 1 ; j <= nums[i] ; j++) {
            mini = min(mini , solve(i+j , nums , dp));
        }

        return dp[i] = 1 + mini;
    }
    int jump(vector<int>& nums) {
        int n = nums.size();
        vector<int> dp(n+1,-1);
        return solve( 0 , nums , dp) - 1;
    }
};