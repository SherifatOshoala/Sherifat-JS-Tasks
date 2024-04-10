word = 'sherifat'
newWord = ''

for x in range(0, len(word)):
    if x % 2 == 0:
        newWord = newWord + word[x]
    else:
        newWord = newWord + 'un-' + word[x]

print(newWord)

word = 'sherifat'
newWord = ''
condition = True

for x in word:
    if condition:
        newWord = newWord + x
    else:
        newWord = newWord + 'un-' + x
    condition =  not condition

print(newWord)