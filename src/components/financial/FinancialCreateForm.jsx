import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {useDispatch, useSelector} from "react-redux";
import {reportFieldName, reportSchema} from "../../lib/schemas";
import {reportsData} from "@/store/store.js";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {useEffect, useState} from "react";
import {createReport} from "../../store/reports/reportsAction";
import {Minus, Plus} from "lucide-react";

export const FinancialCreateForm = () => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(reportsData);
  const [url, setUrl] = useState("");
  const [preview_url, setPreview_url] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  const currentDateTime = new Date();
  const formattedDate = `${currentDateTime.getFullYear()}-${(currentDateTime.getMonth() + 1).toString().padStart(2, '0')}-${currentDateTime.getDate().toString().padStart(2, '0')}-${currentDateTime.getHours().toString().padStart(2, '0')}-${currentDateTime.getMinutes().toString().padStart(2, '0')}-${currentDateTime.getSeconds().toString().padStart(2, '0')}`;
  const reportName = `report-${formattedDate}`;

  const form = useForm({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      [reportFieldName.name]: reportName,
      [reportFieldName.year]: currentYear,
      [reportFieldName.company_id]: 1,
      [reportFieldName.url]: url,
      [reportFieldName.preview_url]: preview_url,
    },
  });

  const {formState: {errors}} = form;

  useEffect(() => {
    if (errors[reportFieldName.preview_url]) {
      setPopoverOpen(true);
    } else {
      setPopoverOpen(false);
    }
  }, [errors]);

  const onSubmit = (values) => {
    dispatch(createReport({...values, url, preview_url}))
  };

  const handleErrors = (errors) => {
    console.error("Validation errors:", errors);
  };

  const renderContent = () => {
    if (!preview_url) return null;

    if (/\.(jpg|jpeg|png|gif|bmp)$/i.test(preview_url)) {
      return (
        <img
          src={preview_url}
          alt="Preview"
          className="w-[90%] h-full object-contain"
        />
      );
    } else if (/\.pdf$/i.test(preview_url)) {
      return (
        <iframe
          src={preview_url}
          className="w-[90%] h-full object-contain"
          title="PDF Preview"
        />
      );
    } else {
      return <p className="text-red-500">Unsupported file type</p>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-64 flex items-center justify-center">
        <Loader/>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, handleErrors)}
        className="flex flex-col items-center gap-2 mx-1 w-full"
      >
        <FormField
          control={form.control}
          name={reportFieldName.year}
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Year"
                  {...field}
                  type="number"
                  className="w-fit"
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <Popover open={popoverOpen} onOpenChange={(open) => setPopoverOpen(open)}>
          <PopoverTrigger asChild>
            <div
              className="w-full rounded-xl bg-gray-500 hover:bg-gray-800 cursor-pointer flex items-center justify-center min-h-0 flex-grow"
              onClick={() => setPopoverOpen((prev) => !prev)}
            >

              {renderContent()}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-fit flex flex-col gap-2">
            <FormField
              control={form.control}
              name={reportFieldName.preview_url}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Preview URL"
                      {...field}
                      type="text"
                      className="w-fit"
                      value={preview_url}
                      onChange={(e) => {
                        const newUrl = e.target.value;
                        field.onChange(newUrl);
                        setPreview_url(newUrl);
                      }}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={reportFieldName.url}
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="URL"
                      {...field}
                      type="text"
                      className="w-fit"
                      value={url}
                      onChange={(e) => {
                        const newUrl = e.target.value;
                        field.onChange(newUrl);
                        setUrl(newUrl);
                      }}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </PopoverContent>
        </Popover>
        <Button
          type="submit"
          className="rounded-full bg-green-500 hover:bg-green-700 w-12 h-12 flex items-center justify-center"
        >
          <Plus/>
        </Button>
      </form>
    </Form>
  );
};
