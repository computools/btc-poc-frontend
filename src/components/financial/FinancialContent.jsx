import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReports,
  deleteReportsById,
} from "../../store/reports/reportsAction";
import { Loader } from "@/components/Loader.jsx";
import { reportsData } from "@/store/store.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Minus } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FinancialCreateForm } from "./FinancialCreateForm";

export function FinancialContent({ readOnly = true }) {
  const dispatch = useDispatch();
  const { reports, loading, error } = useSelector(reportsData);
  const [selectedUrl, setSelectedUrl] = useState(null);
  const swiperRef = useRef(null);
  const maxFileHeight = readOnly ? 580 : 450;

  useEffect(() => {
    dispatch(fetchReports("1"));
  }, [dispatch]);

  const handleSelectChange = (value) => setSelectedUrl(value);

  const handleButtonClick = async () => {
    if (selectedUrl) {
      const response = await fetch(selectedUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "report";
      link.click();
    }
  };

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteReportsById({ company_id: "1", id }));
    }
  };

  const handlePrevSlide = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const Loading = () => (
    <div className="min-h-64 flex items-center justify-center">
      <Loader />
    </div>
  );

  if (loading && !readOnly) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (readOnly && reports.length === 0) {
    return null;
  }

  const DownloadFiles = () =>
    reports.length > 0 && (
      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <Select value={selectedUrl} onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select reports" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Reports by year</SelectLabel>
                {reports.map((report) => (
                  <SelectItem value={report.url} key={report.id}>
                    {report.year} {report.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button
          onClick={handleButtonClick}
          className="col-span-1 bg-green-600 hover:bg-green-800"
          disabled={!selectedUrl}
        >
          Download
        </Button>
      </div>
    );

  const renderFiles = () =>
    reports.length > 0 && (
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={readOnly ? 3 : 2}
        loop={true}
        className="w-full"
      >
        {reports.map((report) => {
          if (!report.url) return null;

          const isImage = /\.(jpg|jpeg|png|gif|bmp)$/i.test(report.url);
          const isPdf = /\.pdf$/i.test(report.url);

          return (
            <SwiperSlide
              key={report.id}
              className="flex flex-col gap-4 items-center"
            >
              <label className="text-center text-gray-600 font-bold max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                {report.year} {report.name}
              </label>
              {isImage && (
                <img
                  src={report.url}
                  alt={report.name}
                  style={{ height: `${maxFileHeight}px` }}
                  className={"object-contain rounded-xl overflow-hidden"}
                />
              )}
              {isPdf && (
                <iframe
                  src={report.url}
                  width="100%"
                  height={`${maxFileHeight}px`}
                  title={report.name}
                  className="rounded-xl overflow-hidden max-h-full"
                />
              )}
              <Button
                onClick={() => handleDelete(report.id)}
                className="rounded-full bg-red-500 hover:bg-red-900 font-bold text-2xl w-12 h-12 flex items-center justify-center"
              >
                <Minus />
              </Button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );

  return (
    <div
      className={cn(
        "flex flex-col gap-4 bg-white p-4 rounded-xl overflow-hidden h-full"
      )}
      style={{ maxHeight: "calc(100vh - 440px)" }}
    >
      {readOnly && <DownloadFiles />}
      <div
        className={readOnly ? "flex items-center gap-2" : "grid grid-cols-11"}
      >
        <Button
          onClick={handlePrevSlide}
          className={`self-center mr-1 ${!readOnly && "col-span-1 col-start-1"}`}
        >
          <ChevronLeft />
        </Button>
        <div
          className={
            readOnly
              ? "flex-1 grid overflow-hidden"
              : "grid overflow-hidden col-span-6 col-start-2"
          }
        >
          {renderFiles()}
        </div>
        {!readOnly && (
          <div className="col-span-3">
            <FinancialCreateForm maxFileHeight={maxFileHeight} />
          </div>
        )}
        <Button
          onClick={handleNextSlide}
          className={`self-center ml-1 ${!readOnly && "col-span-1 col-start-11"}`}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
