## Reading full contents of a text file

'''
    Encouraged way 
    with keyword close the file automatically
'''

# try:
#     with open('./data.txt') as fobj:
#         contents = fobj.read()
#         print(contents)
# except Exception as e:
#     print("File Error: ", e)


'''
Another way for reading contents from a file
'''
# try:
#     fobj = open('./data.txt')
# except Exception as e:
#     print("File Error ", e)
# else:
#     contents = fobj.read()
#     print(contents)
# finally:
#     fobj.close()


'''
Reading line by line and make uppercase
'''
# with open('./data.txt') as fobj:
#     for num,line in enumerate(fobj):
#         # print( num+1, line.lower())
#         print( line )
#         # print("DELETE FROM" + line + "WHERE company_code=companycode;")



# ### Reading list of lines
# with open('./data.txt') as fobj:
#     lines = fobj.readlines()

# print(lines)

# # for line in lines:
# #     print(line)


'''
Write text in a file:
w = write   # erase existing content fi any
a = append
r = read    # default
OR
wt = write
at = append
rt = read
t is for text mode which is set by default
wb = write
ab = append
rb = read
'''

# with open('write_test.txt', 'w') as fobj:
#     fobj.write('Hello!')
#     fobj.write('\n')
#     fobj.write('How are you?')


'''
Reading from a file and writing to a file:
'''
# # Reading from the file data.txt
# with open('./data.txt') as fobj:
#     for num,line in enumerate(fobj):
#         # print( num+1, line.lower())
#         # print( line )
#         print("DELETE FROM", line + " hello")

# # OR
# with open('./data.txt') as fobj:
#     lines = fobj.readlines()

# # print(lines)

# for line in lines:
#     table_name = line
#     # print(line)
#     # print("DELETE FROM", line + "hello", sep=" ")
#     print('DELETE FROM'+ table_name +'hello')




# Writing to the file write_data.txt
# with open('write_data.txt', 'w') as fobj:
#     fobj.write('Hello!')
#     fobj.write('\n')
#     fobj.write('How are you?')



# ## Append text in an existing file
# with open('message.txt', 'a') as fobj:
#     fobj.write("life is good. \n")
