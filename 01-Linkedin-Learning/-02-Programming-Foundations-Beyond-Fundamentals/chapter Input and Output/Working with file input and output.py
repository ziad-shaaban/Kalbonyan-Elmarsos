infile = open('values.txt', 'rt')
outfile = open('values-totaled.txt', 'wt')

print('Processing input')

sum = 0
for line in infile:
    # should convert the line from string to int to make mathematical operationsS
    sum += int(line)
    print(line.rstrip(), file=outfile)
print('\nTotal: ' + str(sum), file=outfile)
outfile.close()

print('output complete')
