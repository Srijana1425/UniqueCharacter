let s = "leetcode"
var nonrepeating= function(s)
{
    let i
    for ( i= 0, n = s.length; i < n; i++) 
    {
        const char = s[i];
        if (s.indexOf(char) === s.lastIndexOf(char))
            return i;
    }
    
    return -1;
}
console.log(nonrepeating(s))





