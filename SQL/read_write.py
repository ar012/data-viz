
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
    # print("DELETE FROM " + table_name + "    WHERE company_code=companycode;")
    print("DELETE FROM " + table_name + "    WHERE company_code='OMEGA';")
    # print("DELETE FROM " + table_name + "    WHERE company_code='EBL';")
    # print("DELETE FROM " + table_name + "    WHERE company_code='GLIL';")
   

