
'''
Reading the file table_list.txt and writing to the file data_delete.sql:
'''

## Reading the file table_list.txt
with open('./table_list.txt') as fobj:
    lines = fobj.readlines()

# print(lines)

for line in lines:
    table_name = line
    # print(table_name)
    print("DELETE FROM " + table_name + "    WHERE company_code=companycode;")
   

# ## Writing to the file data_delete.sql
# with open('data_delete.sql', 'w') as fobj:
#     fobj.write('Hello!')
#     fobj.write('\n')
#     fobj.write('How are you?')
